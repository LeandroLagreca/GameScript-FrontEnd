import { useState } from "react";
import {
  IconButton,
	MenuItem,
	Menu,
} from "@mui/material";
import { MoreVert, DeleteForever } from "@mui/icons-material";
import { sendPasswordResetEmail } from "firebase/auth";
import{auth} from '../../firebase/credenciales';

export default function DotMenu({id}) {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    function requestNewPassword(email) {
      const actionCodeSettings = {
        url: 'https://gamescript.vercel.app/user/',
        handleCodeInApp: true,
      };
    sendPasswordResetEmail(auth, email, actionCodeSettings)
	};



	function requestNewEmail() {
		// axios.put("http://localhost:3001/user/");
		alert('Cambiar email')
	}

    function handleDelete(id) {
        // axios.delete("http://localhost:3001/user/" + id);
        alert('Seguro que quieres eliminar este usuario?')
      }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
				<MenuItem onClick={requestNewPassword}>
					Cambiar contraseña
				</MenuItem>
				<MenuItem onClick={requestNewEmail}>
					Cambiar email
				</MenuItem>
				<MenuItem onClick={handleDelete}>
                Eliminar usuario
                <DeleteForever />
				</MenuItem>
      </Menu>
    </div>
  )
}
