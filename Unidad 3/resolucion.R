# 1) vector de edades

edades <- c(18, 22, 35, 40, 27, 19, 30, 45, 33, 25)

# edad maxima
edad_maxima <- max(edades)
edad_maxima

# edad minima
edad_minima <- min(edades)
edad_minima

# edad promedio
edad_promedio <- mean(edades)
edad_promedio

# sumatoria de las edades
suma_edades <- sum(edades)
suma_edades

# ordenar las edades en orden ascendente
edades_ordenadas <- sort(edades)
edades_ordenadas



# 2) vector de 20 numeros aleatorios entre 1 y 100

numeros <- sample(1:100, 20, replace = TRUE)
numeros

# a) obtener todos los numeros mayores a 50
mayores_50 <- numeros[numeros > 50]
mayores_50

# b) contar cuantos numeros son menores a 25
cantidad_menores_25 <- sum(numeros < 25)
cantidad_menores_25

# c) modificar todos los numeros mayores a 75 para que valgan 75
numeros_modificados <- numeros
numeros_modificados[numeros_modificados > 75] <- 75
numeros_modificados

# d) ordenar los numeros de forma descendente
numeros_desc <- sort(numeros_modificados, decreasing = TRUE)
numeros_desc



# 3) dataframe de estudiantes y notas

nombres <- c("Ana", "Bruno", "Carla", "Diego", "Elena")
matematica <- c(8, 6, 9, 7, 5)
lengua      <- c(7, 8, 6, 9, 7)
ciencia     <- c(9, 7, 8, 6, 7)

# crear el dataframe
df_estudiantes <- data.frame(
  Nombre = nombres,
  Matematica = matematica,
  Lengua = lengua,
  Ciencia = ciencia
)

df_estudiantes

# a) promedio de notas para cada estudiante
promedios <- rowMeans(df_estudiantes[, c("Matematica", "Lengua", "Ciencia")])
promedios

# b) agregar columna con el promedio
df_estudiantes$Promedio <- promedios
df_estudiantes

# c) filtrar estudiantes con promedio mayor a 7
df_mayor_7 <- df_estudiantes[df_estudiantes$Promedio > 7, ]
df_mayor_7

# d) guardar el dataframe en un archivo csv
write.csv(df_estudiantes, "estudiantes_notas.csv", row.names = FALSE)



# 4) funcion que multiplica un vector por un valor

multiplicar_vector <- function(vec, k) {
  # devuelve un nuevo vector con cada elemento multiplicado por k
  resultado <- vec * k
  return(resultado)
}

# probar la funcion con un vector de 10 numeros y valor 2
vec_prueba <- c(18, 22, 35, 40, 27, 19, 30, 45, 33, 25)
vec_resultado <- multiplicar_vector(vec_prueba, 2)
vec_prueba
vec_resultado



# 5) funcion que clasifica temperaturas

clasificar_temperaturas <- function(temp_c) {
  # temp_c: vector de temperaturas en grados celsius
  # devuelve un vector de etiquetas segun el rango de temperatura
  
  etiquetas <- character(length(temp_c))
  
  etiquetas[temp_c < 15] <- "Frio"
  etiquetas[temp_c >= 15 & temp_c <= 25] <- "Moderado"
  etiquetas[temp_c > 25] <- "Calor"
  
  return(etiquetas)
}

# probar la funcion con 10 temperaturas
temps <- c(10, 14, 15, 18, 22, 25, 26, 30, 5, 20)
clasificacion <- clasificar_temperaturas(temps)

temps
clasificacion