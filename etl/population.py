# %% setup
import pandas
import numpy

# %% import infection data
xls = pandas.ExcelFile("./population/population.xlsx")
pop = pandas.read_excel(xls, 0)
pop = pop.rename(columns=pop.iloc[1]).iloc[2:]
pop["state"] = pop["Geographic Area"].apply(lambda x: str(x)[1:])
pop["pop"] = pop.iloc[:, 3]
pop = pop[["state", "pop"]]
pop = pop.set_index("state")
pop

# %% load other
other = pandas.read_csv("./translation/us-counties.csv")
other = other.groupby("state").first()
other

# %%
df = pop.join(other, how="inner")
df

# %% process
df = df[["pop"]]
df = df.reset_index()

df

# %%
df.to_csv("../data/population.csv")
# %%
