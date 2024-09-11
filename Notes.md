# RegIn

Servicios

- Informática
- Mantenimiento
- Oftalmología
- Radioterapia

Grupos

- Informática
- Mantenimiento
- Sanitario

Tipos /subtipos 
- Informática
	- Aplicaciones
		- Gestlab
		- Kewan
		- Abucasis
		- Orion Clinic
		- Orion Logis
		- e-delphyn
		- PACS
	- Sistemas
		- Puestos de trabajo
		- Infraestructura
		- Impresora
	- Ausencia Persona
		- Justificada
		- No justificada
- Sanitario
	- Farmacia
	- Ropero
	- Instalaciones
	- Cocina
	- Almacén
	- Ausencia Personal
		- Justificada
		- No justificada
	- Quirófano
	- Fuga
	- Partes accidente/agresión
	- Transporte
	- Otros
- Mantenimiento
	- Electricidad
	- Fontanería
	- Climatización
	- Carpintería
	- Albañilería
	- Mecánica
	- Domótica
	- Logística
	- Inicio turno
	- Fin turno
	- Ausencia de personal
		- Justificada
		- No justificada


TIpos / Subtipos

Menu admi

  Incidencias y guardias en la misma pantalla (separado por tabs)

  quitar hora fin

  VAlidaciones
  Incidencias
  - No puedes poner de otro dia
  - No puedes poner de otro turno que selecionas en el tab( )
Tipos y subtipos -> van a un grupo, no servicio

## Front

Registro incidencias
    - Listado incidencias (suyas)
    - Nueva incidencia

Administracion
    -  Listado incidencias (todas grupo/servicio)
    -  Tipos subtipos (ver y crud de su grupo/servicio)
    -  Usuarios (ver los de su grupo/servicio)

Super administrador
    - Usuarios (ver CRUD)
    - Tipos y subtipos (ver y crud)
    - Incidencias (ver todas)

<!--
  fecha / hora / titulo / comentario/ tipo/ subtipo (normal)
  fecha / hora/ titulo / comentario/ tipo/ subtipo / persona (admin) 
  fecha / hora/ titulo / comentario/tipo/ subtipo / persona / servicio (superadmin) 
  -->

TODO:

# Frontend

## Intranet (Host)
 
## RegIn
    
- [] Componentes reutilizables Select, button e input en /ui
- [] encabezados paginas css.

### Layout
- [] Logos, imagenes en shared.
- [] Header, usuario y avatar, API: <https://ui-avatars.com>
- [] Sidebar, mostrar segun rol

### Pages

**Usuario**

- Nueva Incidencia 
    - [] Maquetar formulario ->
    - [] Validar formulario con errores
    - [] Toast Incidencia/guardia creada - Error

- Listado de incidencias
    - [] Input filtro fecha
    - [] Input filtro titulo/comentario
    - [] Select tipo
    - [] Select subtipo

**Admin**

- Usuarios
    - Mostrar usuarios del servicio, poder añadir gurpos?
- Tipos y subtipos
    - Editar los tipos y subtipos de su servicio
- Incidencias
    - Mostrar por fecha, usuario, turno, tipo, subtipo
    - PDF
    -  

**SuperAdmin**

- Usuarios
    - Mostrar usuarios de la aplicación, poder añadir gurpos y servicios? 
- Tipos y subtipos
    - Editar los tipos y subtipos de todos los servicios
- Incidencias
    - Mostrar por fecha, usuario, turno, tipo, subtipo y servicio
    - PDF
    -  

# Backend

- [] Refactorizar carpetas
- [] Ldap GET
- [] Rutas api para microfront (user lo q necesita)



*TODO: 11/09/24*

# RegIn

## Backend

- [x] Cambiar servicios por grupos
- [x] Añadir rol en usuario
- [] Actualizar primeros datos bbdd
- [] Swagger

## Frontend

Nueva Incidencia

- [] Modificar crear incidencia
- [] Añadir debajo guardia localizada (con los campos de la app de ana)

Listado de incidencias

- [] Paginación 10
- [] Tabla Filtrado por columnas
- [] Calendario input
- [] Boton generar PDF
- [] Desplegable por incidencia larga en comentario

Añadir en superAdmin

- [] CRUD usuario
- [] Crear y modificar servicios/grupo
- [] 
