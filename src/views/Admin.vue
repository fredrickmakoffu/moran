<template>
    <div id="wrapper">
        <sidebar :page="'Admin'" :sidebar_data=sidebar_data></sidebar>
        
        <div class="body">
          <div class="backdrop" v-on:click="close()"></div>
            
          <admin-header :title="'Manage Site'" :tagline="'All your controls, in one place.'" v-model:all_screens=all_screens v-model:screen=screen v-model:url=url style="margin-bottom: 3rem;"></admin-header>

          <div class="container mb-4">
            <div class="content-wrapper">
              <div class="content mx-auto">

                <!--  List 1 -->
                <auto-list v-if="url != null" v-model:all_screens=all_screens v-model:screen="screen" :title=title :url="url" v-model:list_data="list_data"></auto-list>

              </div>                                          
            </div>
          </div>
          
          <footer class="main-footer d-flex p-4 pb-2">
            <div class="float-end mx-auto">
              Copyright &copy;  

              Built on <a href="www.inshaka.ga">Inshaka</a>
            </div>
          </footer>
        </div>

        <property-modal></property-modal>

        <amenity-modal></amenity-modal>
    </div>
</template>

<script>
import Sidebar from '../components/AutoSidebar'
import AdminHeader from '../components/Header'
import AutoList from '../components/AutoList'
import PropertyModal from '../components/Custom/PropertyModal';
import AmenityModal from '../components/Custom/AmenityModal';

export default {
  name: 'Admin',
  components: {
    AdminHeader,
    Sidebar,
    AutoList,
    PropertyModal,
    AmenityModal
  },
  data() {
    return {
      url: 'api/users',
      title: {status: true, title: 'Your Data', actions: [
        {name: 'Add', type: 'modal', action_url: 'property'}
      ]},
      sidebar_data: [
        {title: 'Admin', link: '', if_children: false, icon: 'home', modal: false},
      ],
      all_screens: [
        {title: 'Users', screen: 1, url: 'api/users', actions: [
          {name: 'Edit', type: 'modal', action_url: 'usersModal'},
          {name: 'Delete', type: 'api', action_url: {type: 'delete', url:'api/user'}},
        ]},
        {title: 'Property', screen: 2, url: 'api/property', actions: [
          {name: 'Edit', type: 'modal', action_url: 'property'},
          {name: 'Delete', type: 'api', action_url: {type: 'delete', url:'api/property/', message: {success: 'Deleted!', error: 'Error!'}}},
          {name: 'Manage Amenities', type: 'modal', action_url: 'amenity'},
        ]},
      ],
      screen: 1,
      list_data: []
    } 
  }
}
</script>
