<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-12 col-md-10 col-lg-8">
        <div class="alert alert-info mt-3 mb-5">
          <b>This is a work-in-progress</b>. This tool demonstrates the
          relationship between all the different factors for determining trinket
          modifications, but this does not simulate realistic trinkets, yet.
        </div>
        <TheHeader />
        <Main />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader";
import Main from "@/views/Main";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    Main,
    TheFooter
  }
};
</script>
