# %% setup
import pandas

# %% import infection data
xls = pandas.ExcelFile("./health/Residence_all_tables.xlsx")
health = pandas.read_excel(xls, 1)
health = health.rename(columns=health.iloc[0]).iloc[1:]
health["state"] = health["Region/state of residence"]
health["cost"] = health[2020]  # personal health care cost
health = health[["state", "cost"]]
health = health.set_index("state")
health

# %% load other
other = pandas.read_csv("./translation/us-counties.csv")
other = other.groupby("state").first()
other

# %%
df = health.join(other, how="inner")
df

# %% process
df = df[["cost"]]
df = df.reset_index()

df

# %%
df.to_csv("../data/health.csv")
# %%
