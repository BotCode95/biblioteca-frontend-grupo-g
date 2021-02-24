import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  
    
    // const categoriasContext = useContext(categoriaContext);
    // const {mensaje, agregarCategoria} = categoriasContext;


    
    const body = (
        <div style={modalStyle} className={classes.paper}>
         <div className="contenedor-form">
                <h1>Editar Libro</h1>
                <form 
                    onSubmit={submitLibro}
                    className="form"
                >
                    <div>
                        <p>Titulo: {libro.nombre}</p>
                        <label htmlFor="descripcion">Editar descripción:</label>
                        <input 
                            type="textarea" 
                            name="descripcion"
                            id="descripcion"
                            className="form-input"
                            placeholder={libro.descripcion}
                            value={descripcion} 
                            onChange={onChange}
                            />
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="boton-submit"
                            value="Guardar Descripcion"/>
                    </div>
                </form>
            </div>
      </div>
    );

    const bodyPrestar = (
        <div style={modalStyle} className={classes.paper}>
         <div className="contenedor-form">
                <h1>Prestar Libro</h1>
                <form 
                    onSubmit={submitLibro}
                    className="form"
                >
                    <div>
                        <p>Titulo: {libro.nombre}</p>
                        <label htmlFor="descripcion">Nombre:</label>
                        <input 
                            type="text" 
                            name="nombre"
                            id="nombre"
                            className="form-input"
                            //placeholder={persona_id}//traer nombre de '/persona'
                            //value={persona_id} //traer nombre de '/persona'
                            onChange={onChange}
                            />
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="boton-submit"
                            value="Prestar"/>
                    </div>
                </form>
            </div>
      </div>
    );
  