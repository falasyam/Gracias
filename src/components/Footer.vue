<template>
    <v-footer
        color="white"
        padless
        elevation="1"
        outlined
        class="font-weight-medium">
            <v-col
                cols="6"
                class="left"
            >
                {{ new Date().getFullYear() }} — <strong>Gracias</strong>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-btn icon href="https://twitter.com/GraciasFans_INA"> <v-icon>mdi-twitter</v-icon></v-btn>
                <v-btn icon href="https://instagram.com/_officialgracias"> <v-icon>mdi-instagram</v-icon></v-btn>
                <v-btn icon href="https://saweria.co/shngrc"><v-icon>mdi-currency-usd</v-icon></v-btn>
            </v-col>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>