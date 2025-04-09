# Imagem base com Java 17
FROM openjdk:17-jdk-slim

# Instala utilitários e configura locale para UTF-8
RUN apt-get update && apt-get install -y \
    maven \
    locales \
    && rm -rf /var/lib/apt/lists/* \
    && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen en_US.UTF-8

# Define variáveis de ambiente para codificação
ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

# Diretório de trabalho no container
WORKDIR /app

# Copia o arquivo pom.xml e baixa as dependências
COPY pom.xml .
COPY src ./src

# Constrói o projeto com Maven
RUN mvn clean package -DskipTests

# Copia o JAR gerado para o container
COPY target/*.jar app.jar

# Expõe a porta da aplicação
EXPOSE 8081

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]