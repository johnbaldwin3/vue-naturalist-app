<template>
<div class="toolbar">
    <v-toolbar dark>
        <v-toolbar-title><v-icon>fa-feather</v-icon> NaturaList </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Observations Dashboard</v-btn>
        <v-btn flat>Add Observations</v-btn>
        <v-btn flat>Observation List</v-btn>
        <v-btn flat>Member Lists</v-btn>
        <v-btn flat>Photo Gallery</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>fa-user</v-icon>
        </v-btn>
        <v-toolbar-side-icon></v-toolbar-side-icon>
  </v-toolbar>

  <ObservationDash />
  <AddEditObservations />
  <ObservationList />
  <UserList />
  <PhotoGallery />
  <AddEditUserCard />

  <v-footer dark fixed>
    <v-spacer></v-spacer>
    <div>NaturaList &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</div>
</template>
<script>
import ObservationDash from './ObservationDash';
import AddEditObservations from './AddEditObservations';
import ObservationList from './ObservationList';
import UserList from './UserList';
import PhotoGallery from './PhotoGallery';
import AddEditUserCard from './AddEditUserCard';

export default {
  name: 'BaseLayout',
  components: { 
      ObservationDash,
      AddEditObservations,
      ObservationList,
      UserList,
      PhotoGallery,
      AddEditUserCard,
   },
}
</script>
