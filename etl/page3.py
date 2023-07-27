# %% setup
import pandas

# %% import infection data
infection = (
    pandas.read_csv("../data/infection.csv").groupby("state").max()[["cases", "deaths"]]
)
infection

# %% import health data
health = pandas.read_csv("../data/health.csv").set_index("state")[["cost"]]
health

# %% import mask data
mask = pandas.read_csv("../data/mask.csv").set_index("state")[["percentage"]]
mask["mask"] = mask["percentage"]
mask = mask[["mask"]]
mask

# %% import population data
population = pandas.read_csv("../data/population.csv").set_index("state")[["pop"]]
population

# %% process
df = infection.join(health, how="outer")
df = df.join(mask, how="outer")
df = df.join(population, how="outer")

df

# %%
df.to_csv("../data/scatter.csv")
# %%
