import React, { useEffect, useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';
import buildGraphQLProvider from './data-provider/graphqlDataProvider';
import { theme } from './theme/theme';
import Login from './Login';
import './App.scss';
import Dashboard from './pages/Dashboard';
import { UserList } from './user/UserList';
import { UserCreate } from './user/UserCreate';
import { UserEdit } from './user/UserEdit';
import { UserShow } from './user/UserShow';
import { RecipeList } from './recipe/RecipeList';
import { RecipeCreate } from './recipe/RecipeCreate';
import { RecipeEdit } from './recipe/RecipeEdit';
import { RecipeShow } from './recipe/RecipeShow';
import { RatingList } from './rating/RatingList';
import { RatingCreate } from './rating/RatingCreate';
import { RatingEdit } from './rating/RatingEdit';
import { RatingShow } from './rating/RatingShow';
import { FamilyList } from './family/FamilyList';
import { FamilyCreate } from './family/FamilyCreate';
import { FamilyEdit } from './family/FamilyEdit';
import { FamilyShow } from './family/FamilyShow';
import { ImageList } from './image/ImageList';
import { ImageCreate } from './image/ImageCreate';
import { ImageEdit } from './image/ImageEdit';
import { ImageShow } from './image/ImageShow';
import { SmartTagList } from './smartTag/SmartTagList';
import { SmartTagCreate } from './smartTag/SmartTagCreate';
import { SmartTagEdit } from './smartTag/SmartTagEdit';
import { SmartTagShow } from './smartTag/SmartTagShow';
import { jwtAuthProvider } from './auth-provider/ra-auth-jwt';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory as createHistory } from 'history';

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const theme = createTheme();
  const newHistory = createHistory({ basename: '/admin' });
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Admin
          title={'Kicsen'}
          dataProvider={dataProvider}
          authProvider={jwtAuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
          history={newHistory}
        >
          <Resource
            name='User'
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name='Recipe'
            list={RecipeList}
            edit={RecipeEdit}
            create={RecipeCreate}
            show={RecipeShow}
          />
          <Resource
            name='Rating'
            list={RatingList}
            edit={RatingEdit}
            create={RatingCreate}
            show={RatingShow}
          />
          <Resource
            name='Family'
            list={FamilyList}
            edit={FamilyEdit}
            create={FamilyCreate}
            show={FamilyShow}
          />
          <Resource
            name='Image'
            list={ImageList}
            edit={ImageEdit}
            create={ImageCreate}
            show={ImageShow}
          />
          <Resource
            name='SmartTag'
            list={SmartTagList}
            edit={SmartTagEdit}
            create={SmartTagCreate}
            show={SmartTagShow}
          />
        </Admin>
      </div>
    </ThemeProvider>
  );
};

export default App;
