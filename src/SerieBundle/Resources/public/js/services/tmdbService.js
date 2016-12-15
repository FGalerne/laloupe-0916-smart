function tmdbService($http) {

    this.$http = $http;


    this.popular = () => {
        return this.$http.get("https://api.themoviedb.org/3/discover/tv?api_key=fc533e12b849e49e74ab5d046165bcc7&language=fr-FR&sort_by=popularity.desc");
    };

    this.sheetSerie = () => {
        return this.$http.get("https://api.themoviedb.org/3/tv/60735?api_key=fc533e12b849e49e74ab5d046165bcc7&language=fr-FR");
    };

    this.people = () => {
      return this.$http.get("https://api.themoviedb.org/3/tv/60735/credits?api_key=fc533e12b849e49e74ab5d046165bcc7&language=fr-FR");
    };

    this.seasons = () => {
      return this.$http.get("https://api.themoviedb.org/3/tv/60735/season/1?api_key=fc533e12b849e49e74ab5d046165bcc7&language=fr-FR");
    };
}
