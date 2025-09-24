
import pandas as pd
import streamlit as st
from sklearn.tree import DecisionTreeRegressor

# Set a title for the Streamlit app
st.title("AI Estate Price Predictor")
st.write("Enter data points to train the model and predict future land prices.")

# Get user input for training data
st.subheader("Training Data")
st.write("Enter four data points (Area in sq. km and Price) to train the model.")

col1, col2 = st.columns(2)
with col1:
    x1 = st.number_input("Area 1 (sq. km)", value=0.0)
    x2 = st.number_input("Area 2 (sq. km)", value=0.0)
    x3 = st.number_input("Area 3 (sq. km)", value=0.0)
    x4 = st.number_input("Area 4 (sq. km)", value=0.0)

with col2:
    y1 = st.number_input("Price 1", value=0.0)
    y2 = st.number_input("Price 2", value=0.0)
    y3 = st.number_input("Price 3", value=0.0)
    y4 = st.number_input("Price 4", value=0.0)

# Create a DataFrame from the user input
# The columns are explicitly named here to avoid a KeyError later on.
data = {'Area': [x1, x2, x3, x4], 'Price': [y1, y2, y3, y4]}
df = pd.DataFrame(data)

st.subheader("Your Data Table")
st.dataframe(df)

# Prepare the data for the model
# The feature (X) must be a 2D array, and the target (y) is a 1D array.
# We use the correct column names from the DataFrame.
X_train = df[['Area']]
y_train = df['Price']

# Initialize and train the Decision Tree Regressor model
model = DecisionTreeRegressor(random_state=42)
model.fit(X_train, y_train)

# Get user input for the prediction
st.subheader("Predict a Future Price")
f_area = st.number_input("Enter a future area of land in sq. km", value=0.0)

# Use the trained model to predict the price for the new area
# The input for predict() must also be a 2D array-like structure.
prediction = model.predict([[f_area]])

# Display the prediction in a clear, user-friendly way
st.success(f"The predicted price for a land area of {f_area} sq. km is: ${prediction[0]:,.2f}")


