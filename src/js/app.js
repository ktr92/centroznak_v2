const app = function () {

  "use strict";

  const wishList = () => {
      $(document).on('click', '[data-entity="add-favorite"]', function (e) {
          e.preventDefault();
          const $link = $(this),
              item = $link.data('item');

          let action = 'add';

          if ($link.hasClass('active')) {
              $link.removeClass('active');
              action = 'remove';
          } else {
              $link.addClass('active');
          }

          $.post('/local/ajax/favorite.php', {ID: item, ACTION: action, QUANTITY: 1}, function (result) {
              reloadFavoriteIcon(result);
          });
      });

      $(document).on('click', '[data-entity="remove-favorite"]', function (e) {
          e.preventDefault();
          const $link = $(this),
              item = $link.data('item');

          $.post('/local/ajax/favorite.page.php', {ID: item, ACTION: 'remove'}, function (result) {
              reloadFavoritePage(result);
          });
      })
  }

  const reloadFavoritePage = (result) => {
      window.location.reload();
  }
  const reloadFavoriteIcon = (result) => {

  }

  const forms = () => {
      $.validator.setDefaults({
          // debug: true,
          errorClass: "input-errortext",
          errorElement: "span",
          validClass: "",
          // lang: "ru"
      });

      $("form[data-entity='form-consult']").validate({
          rules: {
              NAME: "required",
              EMAIL: {
                  required: true,
                  email: true
              },
          },
          messages: {
              NAME: "Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ",
              EMAIL: "Р’РІРµРґРёС‚Рµ РІР°С€ email",
          },
          submitHandler: function (form) {
              $.post('/local/ajax/form.consult.php', $(form).serialize(), function (result) {
                  $(form).trigger("reset");
                  showSuccessModal('#popup_success');
              });
          }
      });

      $("form[data-entity='form-feedback']").validate({
          rules: {
              NAME: "required",
              PHONE: "required",
              EMAIL: {
                  required: true,
                  email: true
              },
          },
          messages: {
              NAME: "Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ",
              EMAIL: "Р’РІРµРґРёС‚Рµ РІР°С€ email",
              PHONE: "Р’РІРµРґРёС‚Рµ РІР°С€ С‚РµР»РµС„РѕРЅ",
          },
          submitHandler: function (form) {
              $.post('/local/ajax/form.feedback.php', $(form).serialize(), function (result) {
                  $(form).trigger("reset");
                  showSuccessModal('#popup_success');
              });
          }
      });
  }

  const showSuccessModal = (id) => {
      $('.modal').modal('hide');
      $(id).modal('show');
  }

  const selectCity = () => {
      $('[data="select-city"]').on('change', function () {
          window.location.href = $(this).val();
      })
  }

  return {
      init: function () {
          wishList();
          forms();
          selectCity();
      },
  };
}();

$(document).ready(function () {
  app.init();
});