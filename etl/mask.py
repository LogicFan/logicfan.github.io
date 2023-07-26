# %% setup
import pandas

# %% import infection data
mask = pandas.read_csv("./mask/mask-use-by-county.csv")
mask

mask["percentage"] = (
    mask["NEVER"] * 0
    + mask["RARELY"] * 0.25
    + mask["SOMETIMES"] * 0.5
    + mask["FREQUENTLY"] * 0.75
    + mask["ALWAYS"] * 1.0
)
mask["fips"] = mask["COUNTYFP"]
mask = mask[["fips", "percentage"]]
mask = mask.set_index("fips")
mask

# %% load other
other = pandas.read_csv("./translation/us-counties.csv")
other = other[["fips", "state"]].groupby("fips").first()
other

# %%
df = mask.join(other, how="left")
df

# %% process
df = df[["percentage", "state"]]
df = df.groupby(["state"]).mean()
df = df.reset_index()

df

# %%
df.to_csv("../data/mask.csv")
# %%
