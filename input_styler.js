/*
			
	Input Styler v2.2.2 www.minus99.com - 2013
			
*/

(function($){
	$.fn.extend({
		iStyler : function(options){
			var defaults = {
					wrapper: false
				};
			
			var options = $.extend(defaults, options);
			
			return this.each(function(e){
				var opt = options,
					obj = $(this),
					tag = obj.prop("tagName").toLowerCase(),
					sClass = '',
					name;
				
				if(tag == "select"){
					var selText = $("option:selected", obj).text();
					
					if(!obj.hasClass("sSelect")) 
						if(!opt.wrapper)
							obj.css({opacity:0, "-webkit-appearance":"none"}).addClass("sSelect").before('<div class="sStylerWrp"><span class="sStyleHolder"><span class="sStyler">'+selText+'</span></span></div>');
						else
							obj.css({opacity:0, "-webkit-appearance":"none"}).addClass("sSelect").wrap('<span class="sStylerMainWrp sStylerWrp_select"></span>').before('<div class="sStylerWrp"><span class="sStyleHolder"><span class="sStyler">'+selText+'</span></span></div>');
					
					obj.change(function(){
						selText = $('option:selected', obj).text();
						obj.prev(".sStylerWrp").children(".sStyleHolder").children(".sStyler").text(selText);
					});
					
				}else if(tag == "input" && obj.attr("type") == "checkbox"){
					
					if(!obj.hasClass("sCheckbox")){
						
						if(obj.is(":checked")) sClass = sClass+' checked'; else sClass = '';
						
						if(!opt.wrapper)
							obj.addClass("sCheckbox").before('<span class="cStyler'+sClass+'"></span>');
						else
							obj.addClass("sCheckbox").wrap('<span class="sStylerMainWrp sStylerWrp_checkbox"></span>').before('<span class="cStyler'+sClass+'"></span>');
						
						
					}
					
					obj.prev("span.cStyler").click(function(){
						obj.click();
						if(obj.is(":checked"))
							$(this).addClass("checked");
						else
							$(this).removeClass("checked");
					});
					
				}else if(tag == "input" && obj.attr("type") == "radio"){		
					
					if(!obj.hasClass("sRadio")){
						name = obj.attr("name");
						var nameStr;
						
						if(name == undefined) nameStr = ''; else nameStr = ' name="'+name+'"';
						
						if(obj.is(":checked")) sClass = sClass+' checked'; else sClass = '';
						
						if(!opt.wrapper)
							obj.addClass("sRadio").before('<span'+nameStr+' class="rStyler'+sClass+'"></span>');
						else
							obj.addClass("sRadio").wrap('<span class="sStylerMainWrp sStylerWrp_radio"></span>').before('<span'+nameStr+' class="rStyler'+sClass+'"></span>');
							
					}
					
					obj.prev("span.rStyler").click(function(){

						if(!obj.is(":checked")){
							obj.click();
							if(name != undefined) $('span.rStyler[name="'+name+'"]').removeClass("checked");
							$(this).addClass("checked");
						}

					});
	
				}
				
			});
		}
	});
})(jQuery);