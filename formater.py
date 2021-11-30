file_name =  "main_data_file_s2.xlsx" # path to file + file name
sheet = "county_mod_sddem" # sheet name or sheet number or list of sheet numbers and names

import pandas as pd
df = pd.read_excel(io=file_name, sheet_name=sheet)

new_header = df.iloc[0] #grab the first row for the header
df = df[1:] #take the data less the header row
df.columns = new_header #set the header row as the df header
print(df.columns)

key_col_total = ['State',
       'Hispanic or Latino (of any race)', 'White',
       'Black or African American', 'American Indian and Alaska Native',
       'Asian', 'Native Hawaiian and Other Pacific Islander',
       'Some other race', 'Two or more races'] #column name for the key

key_col_avg = ['State', 'Population density per km2',
       'Rural-Urban Continuum Code', 'Poverty percentage', 'Poverty category',
     'ILI density', 'Residual'] #column name for the key
key_col_all = ['State', 'Population density per km2',
       'Rural-Urban Continuum Code', 'Poverty percentage', 'Poverty category',
       'Hispanic or Latino (of any race)', 'White',
       'Black or African American', 'American Indian and Alaska Native',
       'Native Hawaiian and Other Pacific Islander',
       'Some other race', 'Two or more races', 'ILI density', 'Residual'] #column name for the key

for col in key_col_all[1:]:
    df[col] = pd.to_numeric(df[col])


print (df.dtypes)

grouped_df_avg = df[key_col_all].groupby(["State"]).mean()
grouped_df_avg = grouped_df_avg.reset_index()
print(grouped_df_avg)
grouped_df_avg.to_csv('average.csv', index=False)  

grouped_df_total = df[key_col_all].groupby(["State"]).sum()
grouped_df_total = grouped_df_total.reset_index()
grouped_df_total.to_csv('sum.csv', index=False)  

# Totals
# grouped_df = df[key_col_total].groupby(["State"])


# grouped_and_summed = grouped_df.sum(numeric_only=True)

# grouped_and_summed = grouped_and_summed.reset_index()
# # Reset indices to match format

# print(grouped_and_summed.head(1))

# print(df.head(5))  # print first 5 rows of the dataframe

# df.head(5).to_csv('output.csv', index=False) 

# # result = pd.concat([grouped_and_summed, grouped_df_avg], axis=0)
# result.to_csv('sum.csv', index=False)  