# %% setup
import pandas

# %% import infection data
infection_2020 = pandas.read_csv("./infection/us-counties-2020.csv")
infection_2021 = pandas.read_csv("./infection/us-counties-2021.csv")
infection_2022 = pandas.read_csv("./infection/us-counties-2022.csv")
infection_2023 = pandas.read_csv("./infection/us-counties-2023.csv")

infection = pandas.concat(
    [
        infection_2020,
        infection_2021,
        infection_2022,
        infection_2023,
    ]
)

infection

# %% process
df = infection[["date", "state", "cases", "deaths"]]
df = df.groupby(["date", "state"]).sum()
df = df.reset_index()

df

# %%
df.to_csv("../data/infection.csv")
# %%
