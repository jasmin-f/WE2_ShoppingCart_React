die mui icons fehlten: 
```
npm install @mui/icons-material --force
```

Routes in vl13-firebase-pwa
```jsx
 <BrowserRouter>
  <Routes>
  // "/" leitet weiter zu /list
    index statt path="/" gibt TS Fehler, wenn es die children hat. ohne children kein Fehler. und einfach Layout gerendert
        Type '{ children: Element[]; index: true; element: Element; }' is not assignable to type 'IntrinsicAttributes & RouteProps'. Types of property 'index' are incompatible.Type 'true' is not assignable to type 'false'.
    <Route path="/" element={<Layout />}> 
      <Route index element={<Navigate to="list" />} /> // das index mit path="/" ersetzen gibt das gleiche Ergebnis
      <Route path="list" element={<ShoppingList />}> 
      deshalb: 
      / == /list == Layout > Shopping List
        <Route path=":id" element={<ShoppingList />} />
        Liste erstellt und geöffnet http://localhost:5173/list/zfO7GNkdHpu0418auwJ8 zeigt immernoch Layout > ShoppingList
          useEffect(() => {
            if (urlParams.id) setCurrentList(urlParams.id);
          }, [urlParams.id]);

        url mit listenid öffnen die es nicht gibt wird so angezeigt, wie wenn keine Liste vorhanden wäre, also "/"  Layout > ShoppingList

      </Route>
      <Route path="share" element={<SharedList />}> // Layout>Share, es denkt ich habe eine geteilte liste offen, ist aber nicht der Fall
        <Route path=":id" element={<SharedList />} /> // auch Layout>Share
      </Route>
      <Route path="user" element={<User />} /> // Layout>User
    </Route>


    bei nicht vorhandener URL: No routes matched location "/fserfiesoijrfpwse" 
  </Routes>
</BrowserRouter>

```