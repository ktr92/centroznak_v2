window.onload=function(){$(".filter__header-js").on("click",(function(){$(this).parent().toggleClass("filter__item_open"),$(this).siblings(".filter__form").slideToggle()})),$("#sliderprice1").length&&($("input#maxCost1").on("focusin",(function(){$(this).val("")})),$("input#minCost1").on("focusin",(function(){$(this).val("")})),$("input#maxCost2").on("focusin",(function(){$(this).val("")})),$("input#minCost2").on("focusin",(function(){$(this).val("")})),$("#maxCost1").val($("#limitMax1").val()),$("#minCost1").val($("#limitMin1").val()),$("#maxCost1").prop("placeholder",$("#limitMax1").val()),$("#minCost1").prop("placeholder",$("#limitMin1").val()),jQuery("#sliderprice1").slider({min:+jQuery("input#limitMin1").val(),max:+jQuery("input#limitMax1").val(),values:[+jQuery("input#limitMin1").val(),+jQuery("input#limitMax1").val()],range:!0,stop:function(i,t){jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values",0)),jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values",1)),jQuery("input#minCost1").val()==$("#limitMin1").val()?jQuery("input#minCost1").addClass("notchanged"):jQuery("input#minCost1").removeClass("notchanged"),jQuery("input#maxCost1").val()==$("#limitMax1").val()?jQuery("input#maxCost1").addClass("notchanged"):jQuery("input#maxCost1").removeClass("notchanged")},slide:function(i,t){jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values",0)),jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values",1)),jQuery("input#minCost1").val()==$("#limitMin1").val()?jQuery("input#minCost1").addClass("notchanged"):jQuery("input#minCost1").removeClass("notchanged"),jQuery("input#maxCost1").val()==$("#limitMax1").val()?jQuery("input#maxCost1").addClass("notchanged"):jQuery("input#maxCost1").removeClass("notchanged")}}),jQuery("input#maxCost1").change((function(){jQuery("input#minCost1").val();var i=jQuery("input#maxCost1").val();i>+jQuery("input#limitMax1").val()&&(i=+jQuery("input#limitMax1").val(),jQuery("input#maxCost1").val(+jQuery("input#limitMax1").val())),jQuery("#sliderprice1").slider("values",1,i),jQuery("input#minCost1").val()==$("#limitMin1").val()?jQuery("input#minCost1").addClass("notchanged"):jQuery("input#minCost1").removeClass("notchanged"),jQuery("input#maxCost1").val()==$("#limitMax1").val()?jQuery("input#maxCost1").addClass("notchanged"):jQuery("input#maxCost1").removeClass("notchanged")})),jQuery("input#minCost1").change((function(){var i=jQuery("input#minCost1").val(),t=jQuery("input#maxCost1").val();t<+jQuery("input#limitMin1").val()&&(t=+jQuery("input#limitMin1").val(),jQuery("input#minCost1").val(+jQuery("input#limitMin1").val())),jQuery("#sliderprice1").slider("values",0,i),jQuery("input#minCost1").val()==$("#limitMin1").val()?jQuery("input#minCost1").addClass("notchanged"):jQuery("input#minCost1").removeClass("notchanged"),jQuery("input#maxCost1").val()==$("#limitMax1").val()?jQuery("input#maxCost1").addClass("notchanged"):jQuery("input#maxCost1").removeClass("notchanged")})))};