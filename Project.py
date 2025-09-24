import pandas as pd
import streamlit as st
from sklearn.tree import DecisionTreeRegressor

# Title
st.title("AI Estate Price Predictor")
st.subheader("Created by Tega")
st.write("A simple AI model that predicts future land prices based on area.")

# Training data input
st.subheader("Training Data")
st.write("Enter four data points (Area in sq. km and Price) to train the model:")

st.write("Area of land (sq. km)")
col1, col2 = st.columns(2)
with col1:
    x1 = st.number_input("Area 1 (sq. km)", min_value=0.0, value=1.0)
    x2 = st.number_input("Area 2 (sq. km)", min_value=0.0, value=2.0)
    x3 = st.number_input("Area 3 (sq. km)", min_value=0.0, value=3.0)
    x4 = st.number_input("Area 4 (sq. km)", min_value=0.0, value=4.0)
st.write("Price of land")
with col2:
    y1 = st.number_input("Price 1", min_value=0.0, value=1000.0)
    y2 = st.number_input("Price 2", min_value=0.0, value=2000.0)
    y3 = st.number_input("Price 3", min_value=0.0, value=3000.0)
    y4 = st.number_input("Price 4", min_value=0.0, value=4000.0)

# DataFrame
data = {'Area': [x1, x2, x3, x4], 'Price': [y1, y2, y3, y4]}
df = pd.DataFrame(data)

st.subheader("Your Data Table")
st.dataframe(df)

# Only train if data is valid
if df['Area'].sum() > 0 and df['Price'].sum() > 0:
    X_train = df[['Area']]
    y_train = df['Price']

    model = DecisionTreeRegressor(random_state=42)
    model.fit(X_train, y_train)

    # Prediction input
    st.subheader(" Predict a Future Price")
    f_area = st.number_input("Enter a future land area (sq. km)", min_value=0.0, value=5.0)

    if f_area > 0:
        prediction = model.predict([[f_area]])
        st.success(f"Predicted price for {f_area} sq. km: **${prediction[0]:,.2f}**")
    else:
        st.warning("Please enter a valid land area to predict.")
else:
    st.error("Please enter non-zero training data to train the model.")




