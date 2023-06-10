// import { Button } from "@mui/material"
// import { Link, Route, BrowserRouter as Router, Routes, } from "react-router-dom"

// export const Navbar = () => {
//   return (
//     <nav>
//       <section>
//         <h1>Recommend System</h1>
//         <Button variant="contained"href="/">トップに戻る</Button>
//       </section>
      
//     </nav>
    
//   )
// }
import { Button, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {
  const isLoggedIn = false; // ログイン状態を管理する状態（仮置き）
  const username = "User"; // ログインユーザー名を管理する状態（仮置き）

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Recommend System
          </Link>
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <Typography variant="body1" component="div" style={{ marginRight: '10px' }}>
          {isLoggedIn ? `こんにちは、${username}さん` : "未ログイン"}
        </Typography>
        <Button variant="contained" color="primary" startIcon={<HomeIcon />} component={Link} to="/">
          トップに戻る
        </Button>
        <Button variant="contained" color="secondary" component={Link} to={isLoggedIn ? "/logout" : "/login"}>
          {isLoggedIn ? "ログアウト" : "ログイン"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
