import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  confirmBox() {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer?',
      text: 'Vous ne pourriez plus le récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui Supprimez-le',
      cancelButtonText: 'Non, garde-le',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Supprimé!', 'Médicament supprimé avec succès.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Médicament n\'a pas été modifier.)', 'error');
      }
    }); 
  }


}
