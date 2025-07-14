const {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  Box,
  Container,
  List,
  ListItem,
  ListItemText
} = window['MaterialUI'];

const e = React.createElement;

function App() {
  return e(React.Fragment, null,
    e(CssBaseline),
    e(AppBar, { position: 'fixed' },
      e(Toolbar, null,
        e(Typography, { variant: 'h6', noWrap: true, component: 'div' }, 'Phish Song Count Dashboard')
      )
    ),
    e(Drawer, {
      variant: 'permanent',
      sx: {
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' }
      }
    },
      e(Toolbar),
      e(Box, { sx: { overflow: 'auto' } },
        e(List, null,
          e(ListItem, { button: true },
            e(ListItemText, { primary: 'Map' })
          ),
          e(ListItem, { button: true },
            e(ListItemText, { primary: 'About' })
          )
        )
      )
    ),
    e(Box, {
      component: 'main',
      sx: {
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
        marginLeft: '240px'
      }
    },
      e(Toolbar),
      e(Container, { maxWidth: 'lg' },
        e(Typography, { variant: 'h4', gutterBottom: true }, 'PHISH SONG COUNT BY CITY'),
        e(Typography, { variant: 'subtitle1', gutterBottom: true },
          'Find Yourself a City to Live In – Songs from every Phish show aggregated by City'
        ),
        e('div', {
          id: 'map',
          style: {
            width: '100%',
            height: '60vh',
            margin: '2rem 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: '#fff'
          }
        })
      )
    )
  );
}

// ...existing code...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
