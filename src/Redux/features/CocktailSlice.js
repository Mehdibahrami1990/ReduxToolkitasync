import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCockTails = createAsyncThunk("cocktails/fetchCocktails", async () => {
return  axios("https://thecocktaildb.com/api/json/v1/1/search.php?s=")
.then((response) =>response.json())
})



