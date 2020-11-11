var body = document.body

// ------------------------------------ DELAY FOR ELEMENTS TO LOAD ------------------------------------*/
function Check_Site_Loaded () {
  var last_el = document.getElementsByClassName("chat__Input")[0]
  if (last_el) {
    Start_The_Llama()
  } else {
    setTimeout(Check_Site_Loaded, 3000)
  }
}
Check_Site_Loaded()

// ------------------------------------ START THE LLAMA ----------------------------------------------*/
function Start_The_Llama () {
  if (script_variables) {
    var loc = window.location.toString()
    var pageName = loc.split("/")[3]
    if (pageName !== "" && pageName !== "directory" && pageName !== "support" && pageName !== "profile" && pageName !== "messages" && pageName !== "settings") {
      Create_Element_IDs()

      Create_Top_Setting_Box()
      Create_Llama_Settings()

      Create_Top_Icons()
      Create_Bottom_Icons()

      Create_Llama_Settings_Icon()

      Create_Llama_Window()
      Load_Draggables()

      Create_Chat_Settings()
      Create_Cam_Settings()
      Create_Tube_Settings()
      Create_Theme_Settings()
      Create_BG_Settings()
      Create_Hide_Settings()

      Create_Cheers()

      Create_Exit_Box()

      Create_Llama_Info()
      Create_Header_Hider()

      Add_Listeners()

      Create_Song_Dropdown()
      Create_Llama_Songs()

      Reload_User_Settings()
    }
  } else {
    setTimeout(Start_The_Llama, 3000)
  }
}

// ------------------------------------ LOAD : REGULAR VARIABLES -------------------------------------*/
var script_variables = "loaded"
var theme_status = localStorage.getItem("thememode")
var user_checkbox_settings = ["robo", "bubble", "hide_chat", "hide_userlist", "ltr", "cheers", "border", "spacing", "user_bg",
  "trans_chat", "trans_users", "hide_usernames", "cambg_cover", "cambg_center", "cambg_repeat",
  "chatbg_cover", "chatbg_center", "chatbg_repeat", "userbg_cover", "userbg_center", "userbg_repeat",
  "override_chatcolor", "override_username", "override_user_bg", "hide_emojis", "hide_gifts", "rounded_cams"]
var user_button_settings = ["audioonly_yt", "miniyt"]
var top_buttons = ["chat", "cam", "theme", "notice", "tube", "settings_icon", "hide", "bg"]
var btmbuttons = ["poprestore", "web", "hideweb"]
var checkbox_actions = ["robo", "bubble", "hide_chat", "hide_userlist", "ltr", "cheers", "border", "spacing", "user_bg",
  "trans_chat", "trans_users", "hide_usernames", "cambg_cover", "cambg_center", "cambg_repeat",
  "chatbg_cover", "chatbg_center", "chatbg_repeat", "userbg_cover", "userbg_center", "userbg_repeat",
  "override_chatcolor", "override_username", "override_user_bg", "hide_emojis", "hide_gifts", "rounded_cams"]
var button_actions = ["audioonly_yt", "miniyt", "hide_header", "save", "reset", "web", "hideweb", "games",
  "tiny", "min", "max", "res", "close", "clear_cam", "clear_chat", "clear_user", "apply_images",
  "popchat", "poprestore", "cambg_settings", "chatbg_settings", "userbg_settings"]
var draggable_windows = ["mydiv", "chat"]

// ------------------------------------ LOAD : THEME VARIABLES ---------------------------------------*/
var pink_bgcolor = "#ffd1dc"
var pink_bordercolor = "#ea98ab"
var pink_lightbgcolor = "#ffe1e6"
var pink_textcolor = "#FFFFFF"
var pink_buttontext = "#FFFFFF"
var pink_userlist = "#FFFFFF"

var green_bgcolor = "#042500"
var green_bordercolor = "#217c16"
var green_lightbgcolor = "#00500d"
var green_textcolor = "#FFFFFF"
var green_buttontext = "#042500"
var green_userlist = "#FFFFFF"

var blue_bgcolor = "#111949"
var blue_bordercolor = "#596ce0"
var blue_lightbgcolor = "#2a388b"
var blue_textcolor = "#FFFFFF"
var blue_buttontext = "#111949"
var blue_userlist = "#FFFFFF"

var mauve_bgcolor = "#9168b2"
var mauve_bordercolor = "#d6b7ef"
var mauve_lightbgcolor = "#BF8FE5"
var mauve_textcolor = "#000000"
var mauve_buttontext = "#9168b2"
var mauve_userlist = "#000000"

var orange_bgcolor = "#b33700"
var orange_bordercolor = "#ff8d10"
var orange_lightbgcolor = "#ff4f00"
var orange_textcolor = "#000000"
var orange_buttontext = "#b33700"
var orange_userlist = "#000000"

var red_bgcolor = "#590000"
var red_bordercolor = "#d02323"
var red_lightbgcolor = "#860000"
var red_textcolor = "#FFFFFF"
var red_buttontext = "#590000"
var red_userlist = "#FFFFFF"

var purple_bgcolor = "#280048"
var purple_bordercolor = "#b14fff"
var purple_lightbgcolor = "#550098"
var purple_textcolor = "#280048"
var purple_buttontext = "#FFFFFF"
var purple_userlist = "#FFFFFF"

var black_bgcolor = "#2C2F33"
var black_bordercolor = "#23272a"
var black_lightbgcolor = "#191919"
var black_textcolor = "#FFFFFF"
var black_buttontext = "#7289da"
var black_userlist = "#FFFFFF"

var tech_bgcolor = "#000000"
var tech_bordercolor = "#1C1C1C"
var tech_lightbgcolor = "#000000"
var tech_textcolor = "#F0F0F0"
var tech_buttontext = "#00FF00"
var tech_userlist = "#C8C8C8"

var buds_bgcolor = "#042500"
var buds_bordercolor = "#217c16"
var buds_lightbgcolor = "#00500d"
var buds_textcolor = "#FFFFFF"
var buds_buttontext = "#042500"
var buds_userlist = "#042500"
var buds_cambg = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6a40bce97c841029ee442a8a297e2b2c976a8bd1/images/bud/mainbg.jpg')"

var splat_bgcolor = "transparent"
var splat_bordercolor = "#51bc02"
var splat_lightbgcolor = "#282828"
var splat_textcolor = "#FFFFFF"
var splat_buttontext = "#FFFFFF"
var splat_userlist = "#FFFFFF"
var splat_cambg = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/mainbg.jpg')"
var splat_userbg = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/userbg.png')"
var splat_chatheaderbg
    = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/headerbg.png')"
var splat_chatbg = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/chatbg.png')"
var splat_messagebg = "url('https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/messagebg.png')"

// ------------------------------------ LOAD : INSTANTLY THEME COLORS OR CUSTOM MODE ---------*/
Create_Custom_Mode()
if (theme_status) {
  body.classList.add("thememode")
  if (theme_status === "custom") {
    var existing_colors = localStorage.getItem("llama_custom_bgcolor")
    if (existing_colors) {
      Save_Llama_Color("reset")
    } else {
      Save_Llama_Color("save")
    }
  } else {
    Toggle_Theme(theme_status)
  }
}

// ------------------------------------ RELOAD : USER SETTINGS ------------------------------*/
function Reload_User_Settings () {
  user_checkbox_settings.forEach(function (user_checkbox_setting) {
    var storage = localStorage.getItem("llama_" + user_checkbox_setting)
    if (storage) {
      body.classList.add(user_checkbox_setting)
      document.getElementById("llama_" + user_checkbox_setting + "_checkbox").checked = true
    }
  })
  user_button_settings.forEach(function (user_button_setting) {
    var storage = localStorage.getItem("llama_" + user_button_setting)
    if (storage) {
      body.classList.add(user_button_setting)
    }
  })

  // ------- ROOM HEADER -------
  var roomheader_status = localStorage.getItem("llama_hide_header")
  if (roomheader_status === "hide_header") {
    body.classList.toggle("hide_header")
  }

  // ------- USER BG COLOR -------
  var bgstorage = localStorage.getItem("llama_override_user_bg")
  if (bgstorage !== "") {
    var bgstoragesrc = localStorage.getItem("llama_user_bgcolorsrc")
    document.getElementById("llama_clear_user_bgcolorsrc").value = bgstoragesrc
    Save_User_BG_Color("save")
  }

  // ------- USER BG IMAGES -------
  var cambg_status = localStorage.getItem("llama_clear_cambg_reload")
  var chatbg_status = localStorage.getItem("llama_clear_chatbg_reload")
  var userbg_status = localStorage.getItem("llama_clear_userbg_reload")
  if (cambg_status || chatbg_status || userbg_status) {
    document.getElementById("llama_clear_cambg").value = cambg_status
    document.getElementById("llama_clear_userbg").value = chatbg_status
    document.getElementById("llama_clear_chatbg").value = userbg_status
    Save_User_BG()
  }

  // ------- USERNAME COLOR -------
  var usernamecolor_status = localStorage.getItem("llama_username_color")
  if (usernamecolor_status) {
    document.getElementById("llama_clear_usercolorsrc").value = usernamecolor_status
    Save_Username_Color("save")
  }

  // ------- CHAT COLOR -------
  var chatcolor_status = localStorage.getItem("llama_chat_color")
  if (chatcolor_status) {
    document.getElementById("llama_clear_chatcolorsrc").value = chatcolor_status
    Save_Chat_Color("save")
  }
}

// ------------------------------------ CREATE : ELEMENT IDS ----------------------------*/
function Create_Element_IDs () {
  var chatInputBox = document.getElementsByClassName("chat__Input")[0]
  chatInputBox.id = "chat_input_box"
  chatInputBox.setAttribute("autocomplete", "off")
  chatInputBox.setAttribute("onclick", "event.stopPropagation()")

  var btm_bar = document.getElementsByClassName("chat__Share")[0]
  btm_bar.id = "bottom_bar"

  var chat_drag = document.getElementsByClassName("chat")[0]
  chat_drag.id = "chat"

  // Var up_bar = document.getElementsByClassName("chat__HeaderOptions")[1]
  // up_bar.id = "chat__HeaderOptions"

  var settings_bar = document.getElementsByClassName("chat__HeaderOptions")[1]
  settings_bar.id = "settings_bar"

  var info = document.getElementsByClassName("roomHeader__UserActions")[0]
  info.id = "info_box"

  var chat_box = document.getElementsByClassName("chat__InputWrapper")[0]
  chat_box.id = "chat_box"
}

// ------------------------------------ ACTION : TOP BAR ACTION -----------------------------*/
function Top_Bar_Action (type) {
  if (type === "settings_icon") {
    body.classList.toggle("open_llama_settings")
  } else {
    body.classList.toggle("open_llama_" + type)
    top_buttons.forEach(function (top_button) {
      if (top_button !== type) {
        body.classList.remove("open_llama_" + top_button)
        var current_theme_selected = localStorage.getItem("thememode")
        var custom_status = localStorage.getItem("custom_box_status")
        if (type === "theme" && current_theme_selected === "custom" && custom_status === "open") {
          Toggle_Custom_Box("off")
          localStorage.setItem("custom_box_status", "closed")
        } else if (type === "theme" && current_theme_selected === "custom" && custom_status === "closed") {
          Toggle_Custom_Box("on")
          localStorage.setItem("custom_box_status", "open")
        } else {
          Toggle_Custom_Box("off")
          localStorage.setItem("custom_box_status", "closed")
        }

        if (type === "notice") {
          var info_frame = document.getElementById("HW_JL_frame")
          var home = "https://headway-widget.net/widgets/7XkGbx"
          info_frame.src = home
        }
      }
    })
  }
}

// ------------------------------------ ACTION : BOTTOM BAR ACTION --------------------------*/
function Bottom_Bar (type) {
  if (type === "miniyt") {
    body.classList.toggle("")
    body.classList.remove("audioonly_yt")
    localStorage.setItem("llama_audioonly_yt", "")
  } else if (type === "audioonly_yt") {
    body.classList.toggle("")
    body.classList.remove("miniyt")
    localStorage.setItem("llama_miniyt", "")
  }
}

// ------------------------------------ ACTION : SAVE USERNAME COLOR -------------------------*/
function Save_User_BG_Color (type) {
  if (type === "save") {
    body.classList.add("userbg_color")
    var usercolor_llama = document.getElementById("llama_clear_user_bgcolorsrc").value
    document.documentElement.style.setProperty("--thememode-user_bgcolor", usercolor_llama)
    localStorage.setItem("llama_user_bgcolorsrc", usercolor_llama)
  } else if (type === "reset") {
    body.classList.remove("userbg_color")
    document.documentElement.style.setProperty("--thememode-user_bgcolor", "")
    document.getElementById("llama_user_bgcolorsrc").value = ""
    document.documentElement.style.setProperty("--thememode-user_bgcolor", "")
    localStorage.setItem("llama_user_bgcolorsrc", "")
  } else if (type === "open") {
    body.classList.toggle("userbg_color")
  }
}

// ------------------------------------ ACTION : SAVE USERNAME COLOR -------------------------*/
function Save_Username_Color (type) {
  if (type === "save") {
    var usercolor_llama = document.getElementById("llama_clear_usercolorsrc").value
    document.documentElement.style.setProperty("--thememode-usernamecolor", usercolor_llama)
    body.classList.add("usercolor")
    localStorage.setItem("llama_username_color", usercolor_llama)
  } else if (type === "reset") {
    body.classList.remove("usercolor")
    document.documentElement.style.setProperty("--thememode-usernamecolor", "")
    document.getElementById("llama_clear_usercolorsrc").value = ""
    document.documentElement.style.setProperty("--thememode-usernamecolor", "")
    localStorage.setItem("llama_username_color", "")
  }
}

// ------------------------------------ ACTION : SAVE CHAT COLOR -------------------------*/
function Save_Chat_Color (type) {
  if (type === "save") {
    var chatcolor_llama = document.getElementById("llama_clear_chatcolorsrc").value
    document.documentElement.style.setProperty("--thememode-chatcolor", chatcolor_llama)
    body.classList.add("chat_color")
    localStorage.setItem("llama_chat_color", chatcolor_llama)
  } else if (type === "reset") {
    body.classList.remove("chat_color")
    document.documentElement.style.setProperty("--thememode-chatcolor", "")
    document.getElementById("llama_clear_chatcolorsrc").value = ""
    document.documentElement.style.setProperty("--thememode-chatcolor", "")
    localStorage.setItem("llama_chat_color", "")
  }
}

// ------------------------------------ ACTION : SAVE CUSTOM COLORS -------------------------*/
function Save_Llama_Color (type) {
  localStorage.setItem("thememode", "custom")
  var bgcolor_llama = document.getElementById("llama_bgcolor").value
  var bordercolor_llama = document.getElementById("llama_bordercolor").value
  var lightbgcolor_llama = document.getElementById("llama_lightbgcolor").value
  var textcolor_llama = document.getElementById("llama_textcolor").value
  var buttontext_llama = document.getElementById("llama_buttontext").value
  var userlist_llama = document.getElementById("llama_userlist").value

  document.documentElement.style.setProperty("--thememode-bgcolor", bgcolor_llama)
  document.documentElement.style.setProperty("--thememode-bordercolor", bordercolor_llama)
  document.documentElement.style.setProperty("--thememode-lightbgcolor", lightbgcolor_llama)
  document.documentElement.style.setProperty("--thememode-textcolor", textcolor_llama)
  document.documentElement.style.setProperty("--thememode-buttontext", buttontext_llama)
  document.documentElement.style.setProperty("--thememode-userlist", userlist_llama)

  if (type === "save") {
    localStorage.setItem("llama_custom_bgcolor", bgcolor_llama)
    localStorage.setItem("llama_custom_bordercolor", bordercolor_llama)
    localStorage.setItem("llama_custom_lightbgcolor", lightbgcolor_llama)
    localStorage.setItem("llama_custom_textcolor", textcolor_llama)
    localStorage.setItem("llama_custom_buttontext", buttontext_llama)
    localStorage.setItem("llama_custom_userlist", userlist_llama)
  } else if (type === "reset") {
    var stored_bgcolor = localStorage.getItem("llama_custom_bgcolor")
    var stored_bordercolor = localStorage.getItem("llama_custom_bordercolor")
    var stored_lightbgcolor = localStorage.getItem("llama_custom_lightbgcolor")
    var stored_textcolor = localStorage.getItem("llama_custom_textcolor")
    var stored_buttontext = localStorage.getItem("llama_custom_buttontext")
    var stored_userlist = localStorage.getItem("llama_custom_userlist")
    document.documentElement.style.setProperty("--thememode-bgcolor", stored_bgcolor)
    document.documentElement.style.setProperty("--thememode-bordercolor", stored_bordercolor)
    document.documentElement.style.setProperty("--thememode-lightbgcolor", stored_lightbgcolor)
    document.documentElement.style.setProperty("--thememode-textcolor", stored_textcolor)
    document.documentElement.style.setProperty("--thememode-buttontext", stored_buttontext)
    document.documentElement.style.setProperty("--thememode-userlist", stored_userlist)
    document.getElementById("llama_bgcolor").value = stored_bgcolor
    document.getElementById("llama_bordercolor").value = stored_bordercolor
    document.getElementById("llama_lightbgcolor").value = stored_lightbgcolor
    document.getElementById("llama_textcolor").value = stored_textcolor
    document.getElementById("llama_buttontext").value = stored_buttontext
    document.getElementById("llama_userlist").value = stored_userlist
    document.documentElement.style.setProperty("--thememode-roombg", "")
    document.documentElement.style.setProperty("--thememode-userbg", "")
    document.documentElement.style.setProperty("--thememode-chatheaderbg", "")
    document.documentElement.style.setProperty("--thememode-chatbg", "")
    document.documentElement.style.setProperty("--thememode-messagebg", "")
  }
}

// ------------------------------------ ACTION : BUTTONS ------------------------------------*/
function Button_Action (type) {
  var storage = "llama_" + type
  var storage_status = localStorage.getItem(storage)
  var loc = window.location.toString()
  var params = loc.split("/")[3]
  var iframe = document.getElementById("game_list")

  var string = type
  var firstUnderscore = string.indexOf("_")
  var secondUnderscore = string.indexOf("_", firstUnderscore + 1)
  var clear = [string.substring(5, secondUnderscore)]


  if (storage_status !== type) {
    localStorage.setItem(storage, type)
  } else {
    localStorage.setItem(storage, "")
  }
  if (type === "miniyt") {
    body.classList.toggle(type)
    body.classList.remove("audioonly_yt")
    localStorage.setItem("llama_audioonly_yt", "")
  } else if (type === "audioonly_yt") {
    body.classList.toggle(type)
    body.classList.remove("miniyt")
    localStorage.setItem("llama_miniyt", "")
  } else if (type === "popchat" || type === "poprestore") {
    body.classList.toggle("popchat")
  } else if (type === "hide_header") {
    body.classList.toggle(type)
  } else if (type === "save" || type === "reset") {
    Save_Llama_Color(type)
  } else if (type === "web" || type === "hideweb") {
    body.classList.toggle("web")
  } else if (type === "games") {
    var home = "https://smokeyllama.com/game_time/main/game/web_window.php"
    iframe.src = home
  } else if (type === "tiny") {
    var tc = "https://tinychat.com/room/"
    iframe.src = tc + params
  } else if (type === "min" || type === "max" || type === "res") {
    Window_Controls(type)
  } else if (type === "close") {
    body.classList.toggle("web")
    iframe.src = ""
  } else if (clear == "clear") {
    if (type === "clear_usercolor") {
      Save_Username_Color("reset")
    } else {
      Clear_User_BG(type)
    }
  } else if (type === "apply_images") {
    Save_User_BG()
  } else if (type === "save_tubes") {
    Save_User_Tubes()
  } else if (type === "apply_colors") {
    Save_Username_Color("save")
  } else if (type === "apply_chat_color") {
    Save_Chat_Color("save")
  } else if (type === "apply_bgcolors") {
    Save_User_BG_Color("save")
  } else if (type === "cambg_settings" || type === "chatbg_settings" || type === "userbg_settings") {
    USER_BG_MINI_MENU(type)
  }
}

// ------------------------------------ ACTION : MINI MENU USER BGS -----------------------------*/
function USER_BG_MINI_MENU (type) {
  var user_settings = ["cambg_settings", "chatbg_settings", "userbg_settings"]
  user_settings.forEach(function (user_setting) {
    if (user_setting === type) {
      body.classList.toggle(type)
    } else {
      body.classList.remove(user_setting)
    }
  })
}

// ------------------------------------ ACTION : CLEAR USER BGS -----------------------------*/
function Clear_User_BG (type) {
  var bgelement = "llama_" + type + "bg"
  var bgvar = "--llama_" + type + "bg-image"
  var bgreload = "llama_" + type + "bg_reload"
  var bg = "llama_" + type + "bg"

  document.getElementById(bgelement).value = ""
  document.documentElement.style.setProperty(bgvar, "")
  localStorage.setItem(bgreload, "")
  localStorage.setItem(bg, "")
}

// ------------------------------------ ACTION : SAVE USER BGS ------------------------------*/
function Save_User_BG () {
  var bgs = ["userbg", "chatbg", "cambg"]

  bgs.forEach(function (bg) {
    var save_bgelement = "llama_clear_" + bg
    var save_bgvar = "--llama_clear_" + bg + "-image"
    var save_bgreload = "llama_clear_" + bg + "_reload"
    var save_bg = "llama_clear_" + bg
    var llama_bginput = document.getElementById(save_bgelement).value

    if (llama_bginput !== "") {
      var llama_bginput_url = "url(" + llama_bginput + ")"
      document.documentElement.style.setProperty(save_bgvar, llama_bginput_url)
      localStorage.setItem(save_bgreload, llama_bginput)
      localStorage.setItem(save_bg, llama_bginput_url)
    } else {
      document.documentElement.style.setProperty(save_bgvar, "")
      localStorage.setItem(save_bgreload, "")
      localStorage.setItem(save_bg, "")
    }
  })
}

// ------------------------------------ ACTION : LLAMA WINDOW -------------------------------*/
function Window_Controls (type) {
  if (type === "max") {
    document.getElementById("window_title").setAttribute("style", "margin-right: 150px;display:inline-block;")
    document.getElementById("iframe_box").style.display = ""
    document.getElementById("llama_max").style.display = "none"
    document.getElementById("mydiv").style.height = "605px"
    document.getElementById("llama_res").style.display = "inline"
  } else if (type === "min") {
    document.getElementById("window_title").style.display = "none"
    document.getElementById("iframe_box").style.display = "none"
    document.getElementById("mydiv").style.width = "221px"
    document.getElementById("llama_max").style.display = "none"
    document.getElementById("llama_min").style.display = "none"
    document.getElementById("llama_res").style.display = "inline"
    document
      .getElementById("mydiv")
      .setAttribute("style", "left:0px; top:90.4%; height:29px; border-bottom-right-radius: 0px;border-bottom-left-radius: 0px; -webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;")
  } else if (type === "res") {
    document.getElementById("window_title").setAttribute("style", "margin-right: 150px;display:inline-block;")
    document.getElementById("iframe_box").style.display = ""
    document.getElementById("mydiv").setAttribute("style", "left:20px; top:10%;")
    document.getElementById("mydiv").style.height = ""
    document.getElementById("llama_max").style.display = "inline"
    document.getElementById("llama_min").style.display = "inline"
    document.getElementById("llama_res").style.display = "none"
  }
}

// ------------------------------------ ACTION : CHECKBOX -----------------------------------*/
function Checkbox_Action (type) {
  var storage = "llama_" + type
  var storage_status = localStorage.getItem(storage)
  var checkbox = "llama_" + type + "_checkbox"
  if (storage_status !== type) {
    localStorage.setItem(storage, type)
    document.getElementById(checkbox).checked = true
  } else {
    localStorage.setItem(storage, "")
    document.getElementById(checkbox).checked = false
  }
  if (type === "bubble" || type === "robo" || type === "hide_chat" || type === "hide_userlist") {
    body.classList.toggle(type)
  } else if (type === "ltr" || type === "cheers" || type === "border" || type === "spacing" || type === "rounded_cams") {
    body.classList.toggle(type)
  } else if (type === "cambg_cover" || type === "cambg_center" || type === "cambg_repeat") {
    body.classList.toggle(type)
  } else if (type === "chatbg_cover" || type === "chatbg_repeat" || type === "chatbg_center") {
    body.classList.toggle(type)
  } else if (type === "userbg_cover" || type === "userbg_repeat" || type === "userbg_center") {
    body.classList.toggle(type)
  } else if (type === "user_bg" || type === "trans_chat" || type === "trans_users" || type === "hide_usernames") {
    body.classList.toggle(type)
  } else if (type === "user_bgcolor") {
    Save_User_BG_Color("open")
  } else if (type === "override_chatcolor" || type === "override_username") {
    body.classList.toggle(type)
  } else if (type === "override_user_bg") {
    body.classList.toggle(type)
    Save_User_BG_Color("save")
  } else if (type === "hide_emojis") {
    body.classList.toggle(type)
  } else if (type === "hide_gifts") {
    body.classList.toggle(type)
  }
}

// ------------------------------------ ACTION : CHEERS BUTTON ------------------------------*/
function Cheers_Button () {
  var text = document.getElementById("chat_input_box")
  var cheers_status = localStorage.getItem("cheers_status")
  var loc = window.location.toString()
  var pageName = loc.split("/")[3]
  if (pageName === "coffeepot") {
    if (!cheers_status) {
      text.value = ":coffeepot::cheer::coffeepot:"
      localStorage.setItem("cheers_status", "1")
    }
    if (cheers_status === "1") {
      text.value = ":letterc::letterh::lettere::lettere::letterr::letters:"
      localStorage.setItem("cheers_status", "2")
    }
    if (cheers_status === "2") {
      text.value = ":coffeepot::letterc::letterh::lettere::lettere::letterr::letters::coffeepot:"
      localStorage.setItem("cheers_status", "")
    }
  } else {
    if (!cheers_status) {
      text.value = "!cheers"
      localStorage.setItem("cheers_status", "1")
    }
    if (cheers_status === "1") {
      text.value = "MEGA CHEERS!"
      localStorage.setItem("cheers_status", "2")
    }
    if (cheers_status === "2") {
      text.value = "▂▅▇ 🔥 CHEERS 🔥 ▇▅▂"
      localStorage.setItem("cheers_status", "")
    }
  }
  setTimeout(Reset_Cheers_Button, 10000)
}

function Reset_Cheers_Button () {
  localStorage.removeItem("cheers_status")
}

function Toggle_Custom_Box (status) {
  if (status === "on") {
    body.classList.add("custom")
  } else {
    body.classList.remove("custom")
  }
}

// ------------------------------------ CREATE : EVENT LISTENERS ----------------------------*/
function Add_Listeners () {
  document.getElementById("info_box").addEventListener("click", Bottom_Bar, false)

  btmbuttons.forEach(function (btmbutton) {
    var btm_btn = "llama_" + btmbutton
    document.getElementById(btm_btn).addEventListener("click", function () {
      Bottom_Bar(btmbutton)
    }, false)
  }
  )
  top_buttons.forEach(function (top_button) {
    var top_btn = "llama_" + top_button
    document.getElementById(top_btn).addEventListener("click", function () {
      Top_Bar_Action(top_button)
    }, false)
  }
  )
  checkbox_actions.forEach(function (checkbox_action) {
    var checkbox_action_element = "llama_" + checkbox_action
    document.getElementById(checkbox_action_element).addEventListener("click", function () {
      Checkbox_Action(checkbox_action)
    }, false)
  })
  button_actions.forEach(function (button_action) {
    var button_action_element = "llama_" + button_action
    document.getElementById(button_action_element).addEventListener("click", function () {
      Button_Action(button_action)
    }, false)
  }
  )
  document.getElementById("Exit_Box").addEventListener("click", function () {
    Exit_Box_Action()
  }, false)
}

// ------------------------------------ CREATE : LLAMA WINDOW -------------------------------*/
function Create_Llama_Window () {
  var Llama_Window = document.createElement("div")
  Llama_Window.innerHTML = `
<style>
body.llama_window {overflow:hidden;}
</style>
<div id="mydiv" style="display:none;">
<div id="mydivheader">
<div id="game_head" class="game_head">
<div id ="window_title" class="window_title" style="display: inline-block; margin-right: 150px;">Llama Window</div>
<div id="control_grp" class="">
<div id="llama_min" class="tube_btn" style="" title="Minimize">
<i class="fas fa-window-minimize"></i>
</div>
<div id="llama_res" class="tube_btn" style="padding:0px;" title="Restore Hover Effect">
<i class="far fa-window-restore"></i>
</div>
<div id="llama_max" class="tube_btn" style="padding:0px;" title="Maximize/Lock Open">
<i class="fas fa-window-maximize"></i>
</div>
<div id="llama_close" class="tube_btn" style="padding:0px;" title="Close">
<i class="far fa-window-close"></i>
</div>
</div>
</div>
</div>
<div id="iframe_box">
<div id="container2">
<iframe src="" class="scrollingContainer" id="game_list"  name="" style="border:0px;width: 105%;overflow-x: hidden;height: 95%;" scrolling="yes" allow="autoplay; microphone; camera"></iframe>
</div>
</div>
</div>
<div id="toggle_menu" style="background-color:transparent !important;border-color:transparent !important;"></div>
`
  Llama_Window.setAttribute("id", "llama_window")
  document.body.appendChild(Llama_Window)
}

// ------------------------------------ CREATE : CUSTOM MODE --------------------------------*/
function Create_Custom_Mode () {
  var Custom_Mode = document.createElement("div")

  Custom_Mode.innerHTML = `
<div class="dropdown__Options" id="Llama_Custom">
<div class="dropdown__Option dropdown__Option-header">Custom Settings</div>
            <span class="dropdown__Option">
                <span>Bar Colors</span>
                <input type="color" name="colorpicker" id="llama_bgcolor" value="#22ADD5" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option">
                <span>Button Color</span>
                <input type="color" name="colorpicker" id="llama_bordercolor" value="#C7CFD9" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option">
                <span>Background Color</span>
                <input type="color" name="colorpicker" id="llama_lightbgcolor" value="#FFFFFF" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option">
                <span>Text Color</span>
                <input type="color" name="colorpicker" id="llama_textcolor" value="#C7CFD9" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option">
                <span>Button Text</span>
                <input type="color" name="colorpicker" id="llama_buttontext" value="#000000" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option">
                <span>Userlist Text</span>
                <input type="color" name="colorpicker" id="llama_userlist" value="#000000" style="width: 20px;border-radius: 3px;height: 18px;padding: 0px;" onchange="Save_Llama_Color()"></input>
            </span>
            <span class="dropdown__Option no_hoverbg">
                <input id="llama_reset" type="button" style="background: #5a6370;color: #fff;border:0px;cursor:pointer;border-radius: 10px;width: 150px;" value="RESET"/>
                </span>
            <span class="dropdown__Option no_hoverbg">
                <input id="llama_save" type="button" style="background: #5a6370;color: #fff;border:0px;cursor:pointer;border-radius: 10px;width: 100%;" value="SAVE"></input>
            </span>
</div>
`
  Custom_Mode.setAttribute("id", "Custom_Mode")
  Custom_Mode.setAttribute("style", "display:none;")
  document.body.appendChild(Custom_Mode)
}

// ------------------------------------ CREATE : CHEERS ELEMENT -----------------------------*/
function Create_Cheers () {
  var cheers_btn = document.createElement("div")
  cheers_btn.className = "button-clear chat__InputAction"
  cheers_btn.setAttribute("id", "Cheers_Button")
  cheers_btn.setAttribute("type", "button")
  cheers_btn.setAttribute("onclick", "event.stopPropagation();Cheers_Button()")
  cheers_btn.innerHTML = `
<i class="fas fa-joint"></i>
`
  chat_box.appendChild(cheers_btn)
}

// ------------------------------------ CREATE : EXIT BOX -----------------------------------*/
function Create_Exit_Box () {
  var exit_box = document.createElement("div")
  exit_box.className = ""
  exit_box.setAttribute("id", "Exit_Box")
  exit_box.innerHTML = ""
  document.body.appendChild(exit_box)
}

// ------------------------------------ ACTION : EXIT BOX -----------------------------------*/
function Exit_Box_Action () {
  Toggle_Custom_Box("off")
  localStorage.setItem("custom_box_status", "closed")
  top_buttons.forEach(function (top_button) {
    body.classList.remove("open_llama_" + top_button)
    body.classList.remove("open_llama_settings")
  })
}

// ------------------------------------ CREATE : TOP SETTINGS OUTER BOX ---------------------*/
function Create_Top_Setting_Box () {
  var chat_menu = document.createElement("div")
  chat_menu.className = ""
  chat_menu.setAttribute("id", "LlamaOptions_Box")
  chat_menu.innerHTML = ""
  document.body.appendChild(chat_menu)
}

// ------------------------------------ CREATE : CHAT SETTINGS ------------------------------*/
function Create_Chat_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var chat_menu = document.createElement("div")
  chat_menu.className = ""
  chat_menu.setAttribute("id", "llama_chat_settings")
  chat_menu.innerHTML = `
<div class="dropdown__Options">
<div class="dropdown__Option dropdown__Option-header">Chat Options</div>
<span class="dropdown__Option" id="llama_robo">Roboto Font<input id="llama_robo_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_bubble">Bubble Chat<input id="llama_bubble_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_cheers">Cheers Button<input id="llama_cheers_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_override_chatcolor">Custom Chat Color<input id="llama_override_chatcolor_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option sub_llama" id="llama_chat_color">
<span style="">Chat Color</span><input type="color" name="colorpicker" value="#000000" onchange="Button_Action('apply_chat_color')" id="llama_clear_chatcolorsrc" style="opacity: 1;cursor: pointer; width: 20px;height:20px;border-radius: 2px;padding: 0px;"/>
</span>
</div>
`
  option_box.appendChild(chat_menu)
}

// ------------------------------------ CREATE : HIDE SETTINGS -------------------------------*/
function Create_Hide_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var cam_menu = document.createElement("div")
  cam_menu.className = ""
  cam_menu.setAttribute("id", "llama_hide_settings")
  cam_menu.innerHTML = `
<div class="dropdown__Options">
<div class="dropdown__Option dropdown__Option-header">Hide Elements</div>
<span class="dropdown__Option" id="llama_border">Cam Borders<input id="llama_border_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_spacing">Cam Spacing<input id="llama_spacing_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_hide_usernames">Cam Usernames<input id="llama_hide_usernames_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_hide_chat">Chatbox<input id="llama_hide_chat_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_hide_userlist">Userlist<input id="llama_hide_userlist_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_hide_emojis">Emojis Button<input id="llama_hide_emojis_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_hide_gifts">Gifts Button<input id="llama_hide_gifts_checkbox" class="jic-checkbox" type="checkbox"></span>
</div>
<div>

`
  option_box.appendChild(cam_menu)
}

// ------------------------------------ CREATE : CAM SETTINGS -------------------------------*/
function Create_Cam_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var cam_menu = document.createElement("div")
  cam_menu.className = ""
  cam_menu.setAttribute("id", "llama_cam_settings")
  cam_menu.innerHTML = `
<div class="dropdown__Options">
<div class="dropdown__Option dropdown__Option-header">Cam Options</div>
<span class="dropdown__Option" id="llama_rounded_cams">Rounded Cams<input id="llama_rounded_cams_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_override_username">Custom Name Color<input id="llama_override_username_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option sub_llama" id="llama_username_color">
<span style="">Username Color</span><input type="color" name="colorpicker" value="#000000" onchange="Button_Action('apply_colors')" id="llama_clear_usercolorsrc" style="opacity: 1;cursor: pointer; width: 20px;height:20px;border-radius: 2px;padding: 0px;"/>
</span>
</div>
`
  option_box.appendChild(cam_menu)
}

// ------------------------------------ CREATE : TUBE SETTINGS -------------------------------*/
function Create_Tube_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var tube_menu = document.createElement("div")
  tube_menu.className = ""
  tube_menu.setAttribute("id", "llama_tube_settings")
  tube_menu.innerHTML = `
<div class="dropdown__Options" style="margin-bottom: 5px;">
<div class="dropdown__Option dropdown__Option-header">Save A Song</div>
<span class="dropdown__Option no_hover">
<input type="text" id="llama_new_song_name" autocomplete="off" placeholder="Link Name..." style=""/>
</span>
<span class="dropdown__Option no_hover">
<input type="text" id="llama_new_song_url" pautocomplete="off" placeholder="Youtube URL..."/>
</span>
<span class="dropdown__Option no_hoverbg">
<input id="llama_save_song" type="button" value="＋ Add Song" class="apply_btn" onclick="Save_New_Song()"/>
</span>
</div>

<div class="dropdown__Options" style="margin-bottom: 5px;">
<div class="dropdown__Option dropdown__Option-header">Manage Saves</div>
<span class="dropdown__Option no_hoverbg">
<select id="song_dropdown" style="width: 100%; border-radius: 10px;">
</select>
</span>
<span class="dropdown__Option no_hoverbg">
<input id="llama_play_song" type="button" value="▶ Play Song" class="apply_btn" onclick="Check_For_Youtube()"/>&nbsp;&nbsp;
<input id="llama_delete_song" type="button" value="✘ Delete Song" class="apply_btn" onclick="Delete_Song_Dropdown()"/>
</span>
</div>

<div class="dropdown__Options">
<div class="dropdown__Option dropdown__Option-header">Tube Options - COMING SOON!</div>
<span class="dropdown__Option" id="llama_override_username">
<s>Add Youtube Play Box to Page</s><input id="" class="jic-checkbox" type="checkbox"></span>
</div>
`
  option_box.appendChild(tube_menu)
}

// ------------------------------------ CREATE : LLAMA SETTINGS -----------------------------*/
function Create_Llama_Settings () {
  var option_box = document.getElementById("LlamaOptions_Box")
  var theme_menu = document.createElement("div")
  theme_menu.className = "shadow-sm"
  theme_menu.setAttribute("id", "llama_settings")
  theme_menu.innerHTML = `
<div id="" style="width:100%; font-weight:600; color: var(--thememode-userlist); border-bottom: 1px solid var(--thememode-bordercolor);">
<h2 style="margin-left: 20px;">Jumpinllama Settings</h2>
<i class="fas fa-times fa-lg" style="float: right; top: 20px; right: 20px; position: absolute; color: var(--thememode-userlist);" onclick="Exit_Box_Action()"></i>
</div>
<div id="llama_settings_inner" style="width:100%; margin:5px;"></div>
`
  option_box.appendChild(theme_menu)
}


// ------------------------------------ CREATE : THEME SETTINGS -----------------------------*/
function Create_Theme_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var theme_menu = document.createElement("div")
  theme_menu.className = ""
  theme_menu.setAttribute("id", "llama_theme_settings")
  theme_menu.innerHTML = `
<div class="dropdown__Options">
<div class="dropdown__Option dropdown__Option-header">Preset Themes</div>
<label class="dropdown__Option no_hoverbg">
<div class="color_square default_mode apply_btn" onclick="Toggle_Theme('default')" title="default" style="width: 100%;border-radius:20px;">
<span style="position: relative; top: 3px;">Default
</span></div>
</label>
<label class="dropdown__Option no_hover">
<div class="color_square pink_mode" onclick="Toggle_Theme('pink')" title="pink"></div>
<div class="color_square green_mode" onclick="Toggle_Theme('green')" title="green"></div>
<div class="color_square blue_mode" onclick="Toggle_Theme('blue')" title="blue"></div>
<div class="color_square mauve_mode" onclick="Toggle_Theme('mauve')" title="mauve"></div>
<div class="color_square orange_mode" onclick="Toggle_Theme('orange')" title="orange"></div>
<div class="color_square red_mode" onclick="Toggle_Theme('red')" title="red"></div>
<div class="color_square purple_mode" onclick="Toggle_Theme('purple')" title="purple"></div>
<div class="color_square black_mode" onclick="Toggle_Theme('black')" title="matte black"></div>
</label>

<label class="dropdown__Option no_hover">
<div class="color_square buds_mode" onclick="Toggle_Theme('buds')" title="buds"></div>
<div class="color_square splat_mode" onclick="Toggle_Theme('splat')" title="splat"></div>
<div class="color_square tech_mode" onclick="Toggle_Theme('tech')" title="tech"></div>
</label>
<label class="dropdown__Option no_hoverbg">
<div class="color_square cust_mode apply_btn" onclick="Toggle_Theme('custom')" title="custom" style="width: 100%;border-radius:20px;">
<span style="position: relative; top: 3px;">Custom Mode
<span class="on">ON</span>
<span class="off">OFF</span>
</span>
</div>
</label>
</div>
<div class="dropdown__Options" style="margin-top:5px;">
<div class="dropdown__Option dropdown__Option-header">Theme Settings</div>
<span class="dropdown__Option" id="llama_ltr">LTR Mode<input id="llama_ltr_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_override_user_bg">Custom BG Color<input id="llama_override_user_bg_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option sub_llama" id="llama_user_bgcolor">
<span style="">Background Color</span>
<input type="color" name="colorpicker" value="#000000" onchange="Button_Action('apply_bgcolors')" id="llama_clear_user_bgcolorsrc" style="opacity: 1;cursor: pointer; width: 20px;height:20px;border-radius: 2px;padding: 0px;"/>
</span>
<span class="dropdown__Option" id="llama_trans_chat">Transparent Chat<input id="llama_trans_chat_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_trans_users">Transparent Users<input id="llama_trans_users_checkbox" class="jic-checkbox" type="checkbox"></span>
</div>
`
  option_box.appendChild(theme_menu)
}

// ------------------------------------ CREATE : BG IMAGE SETTINGS -----------------------------*/
function Create_BG_Settings () {
  var option_box = document.getElementById("llama_settings_inner")
  var theme_menu = document.createElement("div")
  theme_menu.setAttribute("id", "llama_bg_settings")
  theme_menu.innerHTML = `
<div class="dropdown__Options" style="margin-bottom:5px;">
<div class="dropdown__Option dropdown__Option-header">Enable/Disable Images</div>
<span class="dropdown__Option" id="llama_user_bg">Background Images<input id="llama_user_bg_checkbox" class="jic-checkbox" type="checkbox"></span>
</div>

<div class="dropdown__Options" style="margin-bottom:5px;">
<div class="dropdown__Option dropdown__Option-header">CAM BG Image URL <i class="fas fa-video" style="color: var(--thememode-textcolor);"></i></div>
<span class="dropdown__Option no_hoverbg">
<input id="llama_cambg_settings" title="Cam BG Settings" type="button" value="⚙" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-right-radius:0px; border-bottom-right-radius:0px;"/>
<input type='text' name="server" id="llama_clear_cambg" placeholder="URL to image.."/>
<input id="llama_clear_cam" title="Clear Cam BG"type="button" value="✘" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<div id="cambg_settings">
<span class="dropdown__Option" id="llama_cambg_cover">Cover Screen<input id="llama_cambg_cover_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_cambg_center">Center Image<input id="llama_cambg_center_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_cambg_repeat">Disable Repeat<input id="llama_cambg_repeat_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
</div>
</div>

<div class="dropdown__Options" style="margin-bottom:5px;">
<div class="dropdown__Option dropdown__Option-header">CHAT BG Image URL <i class="fas fa-comments" style="color: var(--thememode-textcolor);"></i></div>
<span class="dropdown__Option no_hoverbg">
<input id="llama_chatbg_settings" title="Chat BG Settings" type="button" value="⚙" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-right-radius:0px; border-bottom-right-radius:0px;"/>
<input type='text' name="server" id="llama_clear_chatbg" placeholder="URL to image.."/>
<input id="llama_clear_chat" title="Clear Chat BG" type="button" value="✘" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<div id="chatbg_settings">
<span class="dropdown__Option" id="llama_chatbg_cover">Cover Screen<input id="llama_chatbg_cover_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_chatbg_center">Center Image<input id="llama_chatbg_center_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_chatbg_repeat">Disable Repeat<input id="llama_chatbg_repeat_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
</div>
</div>

<div class="dropdown__Options" style="margin-bottom:5px;">
<div class="dropdown__Option dropdown__Option-header">USERS BG Image URL <i class="fas fa-users" style="color: var(--thememode-textcolor);"></i></div>
<span class="dropdown__Option no_hoverbg">
<input id="llama_userbg_settings" title="User BG Settings" type="button" value="⚙" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-right-radius:0px; border-bottom-right-radius:0px;"/>
<input type='text' name="server" id="llama_clear_userbg" placeholder="URL to image.."/>
<input id="llama_clear_user" title="Clear User BG" type="button" value="✘" style="cursor:pointer;background: var(--thememode-bgcolor);color: #fff;border:0px;border-radius: 10px;width: 15%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<div id="userbg_settings">
<span class="dropdown__Option" id="llama_userbg_cover">Cover Screen<input id="llama_userbg_cover_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_userbg_center">Center Image<input id="llama_userbg_center_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
<span class="dropdown__Option" id="llama_userbg_repeat">Disable Repeat<input id="llama_userbg_repeat_checkbox" class="jic-checkbox" type="checkbox" style="cursor:pointer;"></span>
</div>
</div>

<div class="dropdown__Options" style="margin-bottom:5px;">
<span class="dropdown__Option no_hoverbg">
<input id="llama_apply_images" type="button" value="✔ Apply Images" class="apply_btn"/>
</span>
</div>
`
  option_box.appendChild(theme_menu)
}

// ------------------------------------ CREATE : LLAMA SETTINGS ICONS -------------------------------*/
function Create_Llama_Settings_Icon () {
  var jumpin_settings = document.getElementById("settings_bar")
  var llama_settings_btns = document.createElement("button")
  llama_settings_btns.className = "button chat__HeaderOption"
  llama_settings_btns.setAttribute("type", "button")
  llama_settings_btns.setAttribute("id", "llama_settings_icon")
  llama_settings_btns.setAttribute("title", "llama_settings")
  llama_settings_btns.innerHTML = `
<i class="fas fa-cogs"></i>
`
  jumpin_settings.appendChild(llama_settings_btns)
  jumpin_settings.insertBefore(llama_settings_btns, null)
  jumpin_settings.insertBefore(
    llama_settings_btns,
    jumpin_settings.childNodes[3] || null
  )
}

// ------------------------------------ CREATE : BOTTOM ICONS -------------------------------*/
function Create_Bottom_Icons () {
  var bottom_bar = document.getElementById("bottom_bar")
  var buttom_btns = document.createElement("div")
  buttom_btns.className = ""
  buttom_btns.setAttribute("id", "llama_btm_bar")
  buttom_btns.setAttribute("title", "llama_btm_bar")
  buttom_btns.innerHTML = `
<label class="button chat__HeaderOption LlamaOption_poprestore" id="llama_poprestore" title="Restore PopChat" style="display:none">
<i class="fas fa-window-restore"></i>
</label>
<label class="button chat__HeaderOption LlamaOption_miniyt" id="llama_miniyt" title="Mini Youtube Player">
<i class="fa fa-compress-arrows-alt"></i>
</label>
<label class="button chat__HeaderOption LlamaOption_audioonly_yt" id="llama_audioonly_yt" title="Audio Only Youtube Player">
<i class="fas fa-music"></i>
</label>
<label class="button chat__HeaderOption" id="llama_web" title="Llama Browse">
<i class="fas fa-location-arrow"></i>
</label>
<div class="llama_web" id="llama_window">
<label class="button chat__HeaderOption" id="llama_hideweb" title="Exit Window Mode">
<i class="fas fa-sign-out-alt"></i>
</label>
<label class="button chat__HeaderOption" id="llama_games" title="Mini Game Window">
<i class="fas fa-gamepad"></i>
</label>
<label class="button chat__HeaderOption" id="llama_tiny" title="Youtube Back Up">
<i class="fab fa-youtube"></i>
</label>
</div>
`
  bottom_bar.appendChild(buttom_btns)
  bottom_bar.insertBefore(buttom_btns, null)
  bottom_bar.insertBefore(
    buttom_btns,
    bottom_bar.childNodes[3] || null
  )
}

// ------------------------------------ CREATE : TOP ICONS ----------------------------------*/
function Create_Top_Icons () {
  var top_bar = document.getElementById("llama_settings_inner")
  var top_btns = document.createElement("div")
  top_btns.className = ""
  top_btns.setAttribute("id", "llama_top_bar")
  top_btns.innerHTML = `
<label class="button chat__LlamaOption" id="llama_theme">
<i class="fa fa-palette"></i> &nbsp; Themes
</label>

<label class="button chat__LlamaOption" id="llama_bg">
<i class="fas fa-images"></i> &nbsp; User Images
</label>

<label class="button chat__LlamaOption LlamaOption_chat" id="llama_chat">
<i class="fa fa-user-cog"></i> &nbsp; Chat Options
</label>

<label class="button chat__LlamaOption" id="llama_cam">
<i class="fa fa-th-large"></i> &nbsp; Cam Options
</label>

<label class="button chat__LlamaOption" id="llama_hide">
<i class="fas fa-eye-slash"></i> &nbsp; Hide Elements
</label>

<hr style="border:1px solid var(--thememode-bordercolor); margin-left: 5px; margin-right: 5px;">

<label class="button chat__LlamaOption" id="llama_tube">
<i class="fas fa-play-circle"></i> &nbsp; Tuber Saver
</label>

<hr style="border:1px solid var(--thememode-bordercolor); margin-left: 5px; margin-right: 5px;">

<label class="button chat__LlamaOption" id="llama_popchat">
<i class="fas fa-window-restore"></i> &nbsp; Popout Chat
</label>

<div class="info_footer">
<label class="button chat__LlamaOption" id="llama_notice">
<img src="https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@9ada4fbd26a289f24d0416136e05ae449c748437/images/llamaicon.png" width="20px"> &nbsp; Llama Info
</label>

<center><small>Updated Nov, 09 2020</small>
<br>
<a href="https://www.smokeyllama.com/" style="color:gray;text-decoration:none;" target="_blank">Smokeyllama.com</a></div>
</div>
</label>
</div>
`
  top_bar.appendChild(top_btns)
  top_bar.insertBefore(top_btns, null)
  top_bar.insertBefore(
    top_btns,
    top_bar.childNodes[3] || null
  )
}

// ------------------------------------ CREATE : LLAMA INFO BUTTON --------------------------*/
function Create_Llama_Info () {
  Create_Llama_Notice()
}

// ------------------------------------ CREATE : LLAMA INFO POPUP ---------------------------*/
function Create_Llama_Notice () {
  var option_box = document.getElementById("llama_settings_inner")
  var Llama_Notice = document.createElement("div")
  Llama_Notice.setAttribute("id", "llama_notice_settings")
  Llama_Notice.innerHTML = `
<div id="notice_info">
<label style="cursor:pointer;">
<div class="theme_alert_notice">
<iframe id="HW_JL_frame" src="" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms allow-popups-to-escape-sandbox" tabindex="0" aria-hidden="false" style="height:330px;width:345px;"></iframe>
</div>
`
  option_box.appendChild(Llama_Notice)
}

// ------------------------------------ CREATE : HEADER HIDER -------------------------------*/
function Create_Header_Hider () {
  var info_box = document.getElementById("info_box")
  var HeaderHideBtn = document.createElement("label")
  HeaderHideBtn.className = "LlamaOption_chat"
  HeaderHideBtn.setAttribute("id", "llama_hide_header")
  HeaderHideBtn.setAttribute("title", "Hide Header")
  HeaderHideBtn.innerHTML = `
<span id="header_hide_icon"><i class="fas fa-chevron-up" id="header_up"></i><i class="fas fa-chevron-down" id="header_down"></i></span>
`
  info_box.appendChild(HeaderHideBtn)
  info_box.insertBefore(HeaderHideBtn, null)
  info_box.insertBefore(HeaderHideBtn, info_box.childNodes[0] || null)
}

// ------------------------------------ ACTION : TOGGLE THEME CHOICE ------------------------*/
function Toggle_Theme (color) {
  var thememode_variable = "thememode"
  body.classList.add("thememode")

  var llama_theme_bgcolor
  var llama_theme_bordercolor
  var llama_theme_lightbgcolor
  var llama_theme_textcolor
  var llama_theme_buttontext
  var llama_theme_userlist
  var llama_theme_cambg = ""
  var llama_theme_userbg = ""
  var llama_theme_chatheaderbg = ""
  var llama_theme_chatbg = ""
  var llama_theme_messagebg = ""

  if (color !== "tech") {
    body.classList.remove("tech")
  }

  if (color === "custom") {
    var current_status = localStorage.getItem("thememode")
    if (current_status === "custom") {
      Toggle_Theme("default")
      Toggle_Custom_Box("off")
      localStorage.removeItem("thememode")
    } else {
      Save_Llama_Color("custom")
      Toggle_Custom_Box("on")
    }
  } else {
    if (color === "default") {
      body.classList.remove("thememode")
      localStorage.removeItem("thememode")
      document.documentElement.style.setProperty("--thememode-bgcolor", "")
      document.documentElement.style.setProperty("--thememode-bordercolor", "")
      document.documentElement.style.setProperty("--thememode-lightbgcolor", "")
      document.documentElement.style.setProperty("--thememode-textcolor", "")
      document.documentElement.style.setProperty("--thememode-buttontext", "")
      document.documentElement.style.setProperty("--thememode-userlist", "")

      document.documentElement.style.setProperty("--thememode-roombg", "")
      document.documentElement.style.setProperty("--thememode-userbg", "")
      document.documentElement.style.setProperty("--thememode-chatheaderbg", "")
      document.documentElement.style.setProperty("--thememode-chatbg", "")
      document.documentElement.style.setProperty("--thememode-messagebg", "")
    } else if (color === "pink") {
      llama_theme_bgcolor = pink_bgcolor
      llama_theme_bordercolor = pink_bordercolor
      llama_theme_lightbgcolor = pink_lightbgcolor
      llama_theme_textcolor = pink_textcolor
      llama_theme_buttontext = pink_buttontext
      llama_theme_userlist = pink_userlist
      Toggle_Custom_Box("off")
    } else if (color === "green") {
      llama_theme_bgcolor = green_bgcolor
      llama_theme_bordercolor = green_bordercolor
      llama_theme_lightbgcolor = green_lightbgcolor
      llama_theme_textcolor = green_textcolor
      llama_theme_buttontext = green_buttontext
      llama_theme_userlist = green_userlist
      Toggle_Custom_Box("off")
    } else if (color === "blue") {
      llama_theme_bgcolor = blue_bgcolor
      llama_theme_bordercolor = blue_bordercolor
      llama_theme_lightbgcolor = blue_lightbgcolor
      llama_theme_textcolor = blue_textcolor
      llama_theme_buttontext = blue_buttontext
      llama_theme_userlist = blue_userlist
      Toggle_Custom_Box("off")
    } else if (color === "mauve") {
      llama_theme_bgcolor = mauve_bgcolor
      llama_theme_bordercolor = mauve_bordercolor
      llama_theme_lightbgcolor = mauve_lightbgcolor
      llama_theme_textcolor = mauve_textcolor
      llama_theme_buttontext = mauve_buttontext
      llama_theme_userlist = mauve_userlist
      Toggle_Custom_Box("off")
    } else if (color === "orange") {
      llama_theme_bgcolor = orange_bgcolor
      llama_theme_bordercolor = orange_bordercolor
      llama_theme_lightbgcolor = orange_lightbgcolor
      llama_theme_textcolor = orange_textcolor
      llama_theme_buttontext = orange_buttontext
      llama_theme_userlist = orange_userlist
      Toggle_Custom_Box("off")
    } else if (color === "red") {
      llama_theme_bgcolor = red_bgcolor
      llama_theme_bordercolor = red_bordercolor
      llama_theme_lightbgcolor = red_lightbgcolor
      llama_theme_textcolor = red_textcolor
      llama_theme_buttontext = red_buttontext
      llama_theme_userlist = red_userlist
      Toggle_Custom_Box("off")
    } else if (color === "purple") {
      llama_theme_bgcolor = purple_bgcolor
      llama_theme_bordercolor = purple_bordercolor
      llama_theme_lightbgcolor = purple_lightbgcolor
      llama_theme_textcolor = purple_textcolor
      llama_theme_buttontext = purple_buttontext
      llama_theme_userlist = purple_userlist
      Toggle_Custom_Box("off")
    } else if (color === "black") {
      llama_theme_bgcolor = black_bgcolor
      llama_theme_bordercolor = black_bordercolor
      llama_theme_lightbgcolor = black_lightbgcolor
      llama_theme_textcolor = black_textcolor
      llama_theme_buttontext = black_buttontext
      llama_theme_userlist = black_userlist
      Toggle_Custom_Box("off")
    } else if (color === "buds") {
      llama_theme_bgcolor = buds_bgcolor
      llama_theme_bordercolor = buds_bordercolor
      llama_theme_lightbgcolor = buds_lightbgcolor
      llama_theme_textcolor = buds_textcolor
      llama_theme_buttontext = buds_buttontext
      llama_theme_cambg = buds_cambg
      llama_theme_userlist = buds_userlist
      Toggle_Custom_Box("off")
    } else if (color === "splat") {
      llama_theme_bgcolor = splat_bgcolor
      llama_theme_bordercolor = splat_bordercolor
      llama_theme_lightbgcolor = splat_lightbgcolor
      llama_theme_textcolor = splat_textcolor
      llama_theme_buttontext = splat_buttontext
      llama_theme_cambg = splat_cambg
      llama_theme_userbg = splat_userbg
      llama_theme_chatheaderbg = splat_chatheaderbg
      llama_theme_chatbg = splat_chatbg
      llama_theme_messagebg = splat_messagebg
      llama_theme_userlist = splat_userlist
      Toggle_Custom_Box("off")
    } else if (color === "tech") {
      llama_theme_bgcolor = tech_bgcolor
      llama_theme_bordercolor = tech_bordercolor
      llama_theme_lightbgcolor = tech_lightbgcolor
      llama_theme_textcolor = tech_textcolor
      llama_theme_buttontext = tech_buttontext
      llama_theme_userlist = tech_userlist
      body.classList.add("tech")
      Toggle_Custom_Box("off")
    }
    document.documentElement.style.setProperty(
      "--thememode-bgcolor",
      llama_theme_bgcolor
    )
    document.documentElement.style.setProperty(
      "--thememode-bordercolor",
      llama_theme_bordercolor
    )
    document.documentElement.style.setProperty(
      "--thememode-lightbgcolor",
      llama_theme_lightbgcolor
    )
    document.documentElement.style.setProperty(
      "--thememode-textcolor",
      llama_theme_textcolor
    )
    document.documentElement.style.setProperty(
      "--thememode-buttontext",
      llama_theme_buttontext
    )

    document.documentElement.style.setProperty(
      "--thememode-roombg",
      llama_theme_cambg
    )
    document.documentElement.style.setProperty(
      "--thememode-userbg",
      llama_theme_userbg
    )
    document.documentElement.style.setProperty(
      "--thememode-chatheaderbg",
      llama_theme_chatheaderbg
    )
    document.documentElement.style.setProperty(
      "--thememode-chatbg",
      llama_theme_chatbg
    )
    document.documentElement.style.setProperty(
      "--thememode-messagebg",
      llama_theme_messagebg
    )
    document.documentElement.style.setProperty(
      "--thememode-userlist",
      llama_theme_userlist
    )
  }
  if (theme_status !== color) {
    localStorage.setItem(thememode_variable, color)
  }
}

// ------------------------------------ LOAD : DRAGGABLE ELEMENT ----------------------------*/
function Load_Draggables () {
  draggable_windows.forEach(function (draggable_window) {
    dragElement(document.getElementById(draggable_window))
  })
}

var PADDING = 8
var viewport = {"bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0}

// ------------------------------------ CREATE : YOUTUBE IMPORT ----------------------------*/
// ------------------------------------ CREATE : YOUTUBE IMPORT ----------------------------*/
function Check_For_Youtube () {
  var video_button_starter = document.getElementsByClassName("chat__HeaderOption--video")[0]
  if (video_button_starter) {
    Define_Youtube_Button()
  } else {
    setTimeout(function () {
      Check_For_Youtube()
    }, 3000)
  }
}

function Define_Youtube_Button () {
  var video_button = document.getElementsByClassName("chat__HeaderOption--video")[0]
  if (video_button) {
    video_button.id = "video_play_btn"
  }
  // Document.getElementById("video_play_btn").setAttribute("onclick", "Open_Youtube_Box()")
  Open_Youtube_Box()
}

function Open_Youtube_Box () {
  var video_button = document.getElementsByClassName("chat__HeaderOption--video")[0]
  if (video_button) {
    video_button.click()
    Define_Youtube_Search_Box()
  }
}

function Define_Youtube_Search_Box () {
  var yt_search_box = document.getElementsByClassName("youtube__SearchInput")[0]
  if (yt_search_box) {
    yt_search_box.id = "yt_search_box"
  }
  Enter_Youtube_URL()
}

function Enter_Youtube_URL () {
  var yt_search_box = document.getElementsByClassName("youtube__SearchInput")[0]
  if (yt_search_box) {
    // Yt_search_box.value = current_link
    var selected_song = document.getElementById("song_dropdown")
    var song_selected = selected_song.options[selected_song.selectedIndex].value
    yt_search_box.value = song_selected
  }
  var yt_search_button = document.querySelector("body > div:nth-child(22) > div > div > div.modal__Body > div > form > button")
  if (yt_search_button) {
    yt_search_button.click()
  }
  Search_Youtube_URL()
}

function Search_Youtube_URL () {
  var yt_search_button = document.querySelector("body > div:nth-child(22) > div > div > div.modal__Body > div > form > button")
  if (yt_search_button) {
    yt_search_button.click()
  }
  setTimeout(Click_First_Youtube_Result, 1500)
}

function Click_First_Youtube_Result () {
  var yt_first_result = document.getElementsByClassName("youtube__Result")[0]
  if (yt_first_result) {
    yt_first_result.click()
  }
}

function Create_Llama_Songs () {
  var current_songs = localStorage.getItem("llama_songs")
  // Alert(current_songs)
  if (current_songs === null) {
    var songs = []
    var song1 = {"song_name": "Youtube_Name", "song_url": "Youtube_Link"}
    songs.push(song1)
    localStorage.setItem("llama_songs", JSON.stringify(songs))
  }
}

function Save_New_Song () {
  var new_song_name = document.getElementById("llama_new_song_name").value
  var new_song_url = document.getElementById("llama_new_song_url").value
  var stored_songs = JSON.parse(localStorage.getItem("llama_songs"))
  var new_song = {"song_name": new_song_name, "song_url": new_song_url}
  stored_songs.push(new_song)
  localStorage.setItem("llama_songs", JSON.stringify(stored_songs))

  document.getElementById("llama_new_song_name").value = ""
  document.getElementById("llama_new_song_url").value = ""
  Create_Song_Dropdown()
}

function Delete_Song_Dropdown () {
  var selected_song = document.getElementById("song_dropdown")
  var song_selected = selected_song.options[selected_song.selectedIndex].innerHTML
  var json = JSON.parse(localStorage.llama_songs)
  var i
  for (i=0; i<json.length; i++) {
    if (json[i].song_name === song_selected) {
      json.splice(i, 1)
      localStorage.llama_songs = JSON.stringify(json)
    }
  }
  Create_Song_Dropdown()
}

function Create_Song_Dropdown () {
  var select_box = document.getElementById("song_dropdown")
  if (select_box) {
    select_box.innerHTML = ""
    var current_songs = JSON.parse(localStorage.getItem("llama_songs"))
    if (current_songs) {
      var first_option = document.createElement("option")
      first_option.setAttribute("disabled", "disabled")
      first_option.setAttribute("selected", "selected")
      first_option.innerHTML = "Select A Song..."
      select_box.appendChild(first_option)
      current_songs.forEach(function (current_song) {
        var current_song_name_pre = JSON.stringify(current_song.song_name)
        var current_song_url_pre = JSON.stringify(current_song.song_url)
        var current_song_name = current_song_name_pre.replace(/['"]+/g, "")
        var current_song_url = current_song_url_pre.replace(/['"]+/g, "")
        if (current_song_name !== "Youtube_Name") {
          var select_box = document.getElementById("song_dropdown")
          var new_option = document.createElement("option")
          new_option.setAttribute("value", current_song_url)
          new_option.innerHTML = current_song_name
          select_box.appendChild(new_option)
        }
      })
    }
  } else {
    setTimeout(Create_Song_Dropdown, 3000)
  }
}

// ------------------------------------ ACTION : DRAG ELEMENT ---------------------------------*/
function dragElement (elmnt) {
  var pos1 = 0
  var pos2 = 0
  var pos3 = 0
  var pos4 = 0
  if (document.getElementById(elmnt.id + "__Header")) {
    // If present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "__Header").onmousedown = dragMouseDown
  } else {
    // Otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown (e) {
    e = e || window.event
    // Get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY

    // Store the current viewport and element dimensions when a drag starts
    rect = elmnt.getBoundingClientRect()
    viewport.bottom = window.innerHeight - PADDING
    viewport.left = PADDING
    viewport.right = window.innerWidth - PADDING
    viewport.top = PADDING

    document.onmouseup = closeDragElement
    // Call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag (e) {
    e = e || window.event

    // Calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY

    // Set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
  }

  function closeDragElement () {
    // Stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
  }
}
