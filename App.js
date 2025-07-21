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
  ListItemText,
  IconButton,
  ThemeProvider,
  createTheme
} = window['MaterialUI'];

const e = React.createElement;
const useState = React.useState;

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  const [open, setOpen] = useState(false); // Drawer starts closed

  const handleDrawerToggle = () => setOpen(!open);

  return e(ThemeProvider, { theme: darkTheme },
    e(CssBaseline),
    e(AppBar, { position: 'fixed', sx: { zIndex: 1300 } },
      e(Toolbar, null,
        e(IconButton, {
          color: 'inherit',
          edge: 'start',
          onClick: handleDrawerToggle,
          sx: { mr: 2 }
        }, e('span', { className: 'material-icons' }, open ? 'chevron_left' : 'menu')),
        e(Typography, { variant: 'h6', noWrap: true, component: 'div' }, 'Phish Song Count Dashboard')
      )
    ),
    e(Drawer, {
      variant: 'persistent',
      open: open,
      sx: {
        width: 240,
        flexShrink: 0,
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
        marginLeft: open ? '240px' : '0px',
        transition: 'margin-left 0.3s'
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
            border: '1px solid #333',
            borderRadius: '8px',
            background: '#222'
          }
        }),
        e('div', { id: 'plot', style: { width: '100%', margin: '2rem 0' } }) // <-- Add this line
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));