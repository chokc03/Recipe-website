# Recipe website (Using Axios, Redux)

### Demo

- website:

### Purpose of the project

- Learn how to get data from api with axios
- Learn how to use axios in async function
- Making Redux to know how its reducer, action etc. interacts with other component in state and props

### Used Skills

- React
- Redux
- CSS
- API

### Advanced Feature
#### Axios (GET API)

- Getting Data from Api using async function : 
    > I used four different async functions to get the api datas. This is one of the four.
    - Category listing 
        fetchCategoryData function  : 
        ```ts
        useEffect(()=>{
            const fetchCategoryData = async()=>{
                try{
                    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                    setCategories(res.data.categories);
                }catch(e){
                    console.log(e);
                };
            };
            fetchCategoryData();
       },[]);
        ```
        => This function helps to Get Data from api and to wait until the data is fetched or if the api has an error it catches error by async function. Moreover, by using useEffect, this function only renders once when the website first renders. This helps to optimize the function's useless rendering.

#### Redux

- Using Redux to use global states
    > I use three different reducers in order to make a global state. This is one of them.
    - Setting Categories
        1. Action Type : 
        ```ts
        const SET_CATEGORY = 'category/SET_CATEGORY';
        ```

        2. Actions : 
        ```ts
        export const setCategory = (category)=>{
            return{
                type:SET_CATEGORY,
                payload:category,
            }
        }
        ```

        3. InitialState & Reducer : 
        ```ts
        const initialCategoryState ={
            categories:[]
        }

        export const categoryReducer =(state=initialCategoryState, action)=>{
            switch (action.type){
                case SET_CATEGORY:
                    return{
                        ...state,
                        categories:action.payload
                    }
                default:
                    return state
            }
        }
        ```
        4. Used combineReducer to combine all the reducers I made and sended to 'index.js'

        5. Made a store to save all the Reducers and Actions. Used Provider to make Global State in 'App.js'

        6. Used useDispatch to add the data from api into state (Cards.jsx)
        ```ts
        const dispatch  = useDispatch()
        useEffect(()=>{
            const fetchCategory=async()=>{
                try{
                    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
                    dispatch(setCategory(res.data));
                }catch(e){
                    console.log(e);
                }
            }
            fetchCategory();   
        },[selectedCategory,dispatch])
        ```

        7. Used useSelector to use the state from redux (CardDetail.jsx)
        ```ts
        const categories = useSelector(state => state.categoryReducer.categories.meals);
        ```

### Things to improve

- Appearance of instructions. It appears late becasue of getting api, so it collapses with previous instructions

- Loading late. In order to get the api from the beginning, it loads late in first appearance.



