{
  "id": "8f41a4d6-9d8c-4e43-82a7-14b947916197",
  "version": "2.0",
  "name": "Proyecto Npm.js",
  "url": "https://tanner.cl/",
  "tests": [{
    "id": "6517328a-d7be-470c-bb11-435e3a203f85",
    "name": "Funcionales",
    "commands": [{
      "id": "2b861255-ff31-411e-81f7-13168cad9c89",
      "comment": "Verificar Url de la página principal",
      "command": "open",
      "target": "https://tanner.cl/",
      "targets": [],
      "value": ""
    }, {
      "id": "12c2a910-0ae8-479b-954e-dd221bf553de",
      "comment": "",
      "command": "setWindowSize",
      "target": "810x816",
      "targets": [],
      "value": ""
    }, {
      "id": "cf728aa6-4e2e-479a-8483-de422a725dec",
      "comment": "",
      "command": "click",
      "target": "id=button-acceso-clientes",
      "targets": [
        ["id=button-acceso-clientes", "id"],
        ["linkText=Acceso Clientes", "linkText"],
        ["css=#button-acceso-clientes", "css:finder"],
        ["xpath=//a[contains(text(),'Acceso Clientes')]", "xpath:link"],
        ["xpath=//a[@id='button-acceso-clientes']", "xpath:attributes"],
        ["xpath=//div[@id='menu_mobile_top']/div/div/div/a", "xpath:idRelative"],
        ["xpath=//a[contains(@href, '#collapse_clientes_mobile')]", "xpath:href"],
        ["xpath=//div/a", "xpath:position"],
        ["xpath=//a[contains(.,'Acceso Clientes')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "f6c71889-8820-449e-b153-dad384211357",
      "comment": "",
      "command": "click",
      "target": "name=aux_user",
      "targets": [
        ["name=aux_user", "name"],
        ["css=.form-field--is-active > .input_username", "css:finder"],
        ["xpath=//input[@name='aux_user']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div/div/input", "xpath:idRelative"],
        ["xpath=//div/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "ed404577-5f85-4120-8df8-223ce8d185f9",
      "comment": "",
      "command": "type",
      "target": "name=aux_user",
      "targets": [
        ["name=aux_user", "name"],
        ["css=.form-field--is-active > .input_username", "css:finder"],
        ["xpath=//input[@name='aux_user']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div/div/input", "xpath:idRelative"],
        ["xpath=//div/input", "xpath:position"]
      ],
      "value": "sdssd"
    }, {
      "id": "efe3631f-09c9-4c90-bab0-012e3be50038",
      "comment": "",
      "command": "click",
      "target": "css=.login_block:nth-child(1) .elementor-button-text",
      "targets": [
        ["css=.login_block:nth-child(1) .elementor-button-text", "css:finder"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[3]/div/button/span/span", "xpath:idRelative"],
        ["xpath=//span/span", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "957c1950-dd4f-49c0-a574-aa12e3716b2a",
      "comment": "",
      "command": "click",
      "target": "css=#menu_mobile_top_collapsed > .header_full_block_container",
      "targets": [
        ["css=#menu_mobile_top_collapsed > .header_full_block_container", "css:finder"],
        ["xpath=//div[@id='menu_mobile_top_collapsed']/div", "xpath:idRelative"],
        ["xpath=//div[3]/div", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "aa807cd0-c63a-406b-a934-8459e322a186",
      "comment": "",
      "command": "type",
      "target": "name=aux_user",
      "targets": [
        ["name=aux_user", "name"],
        ["css=.form-field--is-filled > .input_username", "css:finder"],
        ["xpath=//input[@name='aux_user']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[2]/div/input", "xpath:idRelative"],
        ["xpath=//div/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "ee8fdceb-5b6f-430e-81c3-be58642bfee1",
      "comment": "",
      "command": "click",
      "target": "name=aux_pass",
      "targets": [
        ["name=aux_pass", "name"],
        ["css=.form-field--is-active > .input_pass", "css:finder"],
        ["xpath=//input[@name='aux_pass']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[3]/div/input", "xpath:idRelative"],
        ["xpath=//div[3]/div/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "8a00f12e-0499-4713-acf5-72236bebf5b3",
      "comment": "",
      "command": "type",
      "target": "name=aux_pass",
      "targets": [
        ["name=aux_pass", "name"],
        ["css=.form-field--is-active > .input_pass", "css:finder"],
        ["xpath=//input[@name='aux_pass']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[3]/div/input", "xpath:idRelative"],
        ["xpath=//div[3]/div/input", "xpath:position"]
      ],
      "value": "adsdsdgsd"
    }, {
      "id": "f85c1c1a-90b9-47a6-9a66-8c0c90988b95",
      "comment": "",
      "command": "click",
      "target": "css=.login_block_ingresar:nth-child(5) .elementor-button",
      "targets": [
        ["css=.login_block_ingresar:nth-child(5) .elementor-button", "css:finder"],
        ["xpath=//button[@type='submit']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[4]/div/button", "xpath:idRelative"],
        ["xpath=//button", "xpath:position"],
        ["xpath=//button[contains(.,'Ingresar')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "7f558f7a-cf3f-4e0b-8111-5b53fca1f988",
      "comment": "",
      "command": "click",
      "target": "css=.login_block:nth-child(1) > .elementor-form",
      "targets": [
        ["css=.login_block:nth-child(1) > .elementor-form", "css:finder"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]", "xpath:idRelative"],
        ["xpath=//div[3]/div/div/div/div/div[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "ca8e7995-35df-4849-aeb9-0f3fce90760a",
      "comment": "",
      "command": "type",
      "target": "name=aux_pass",
      "targets": [
        ["name=aux_pass", "name"],
        ["css=.form-field--is-filled > .input_pass", "css:finder"],
        ["xpath=//input[@name='aux_pass']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[3]/div/input", "xpath:idRelative"],
        ["xpath=//div[3]/div/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "48560c45-3d1e-4fc6-8b16-555b51409681",
      "comment": "",
      "command": "click",
      "target": "css=.login_block_ingresar:nth-child(5) .elementor-button",
      "targets": [
        ["css=.login_block_ingresar:nth-child(5) .elementor-button", "css:finder"],
        ["xpath=//button[@type='submit']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[4]/div/button", "xpath:idRelative"],
        ["xpath=//button", "xpath:position"],
        ["xpath=//button[contains(.,'Ingresar')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "2005de0d-6784-41ba-9bb7-7c91a97bde8d",
      "comment": "",
      "command": "mouseOver",
      "target": "css=.login_block_ingresar:nth-child(5) .elementor-button",
      "targets": [
        ["css=.login_block_ingresar:nth-child(5) .elementor-button", "css:finder"],
        ["xpath=//button[@type='submit']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[4]/div/button", "xpath:idRelative"],
        ["xpath=//button", "xpath:position"],
        ["xpath=//button[contains(.,'Ingresar')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "60f335d8-a4be-4e1c-adb0-70893a8907dd",
      "comment": "",
      "command": "mouseOut",
      "target": "css=.login_block_ingresar:nth-child(5) .elementor-button",
      "targets": [
        ["css=.login_block_ingresar:nth-child(5) .elementor-button", "css:finder"],
        ["xpath=//button[@type='submit']", "xpath:attributes"],
        ["xpath=//div[@id='collapse_clientes_mobile']/div/div/div[2]/form/div[4]/div/button", "xpath:idRelative"],
        ["xpath=//button", "xpath:position"],
        ["xpath=//button[contains(.,'Ingresar')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "e3785e25-b4bd-4345-971a-f912b026da1a",
      "comment": "",
      "command": "click",
      "target": "id=button-pedir-financiamiento",
      "targets": [
        ["id=button-pedir-financiamiento", "id"],
        ["linkText=Pedir financiamiento", "linkText"],
        ["css=#button-pedir-financiamiento", "css:finder"],
        ["xpath=//a[@id='button-pedir-financiamiento']", "xpath:attributes"],
        ["xpath=//div[@id='menu_mobile_top']/div/div/div[2]/a", "xpath:idRelative"],
        ["xpath=//a[contains(@href, '#collapse_financiamiento')]", "xpath:href"],
        ["xpath=//div[2]/a", "xpath:position"],
        ["xpath=//a[contains(.,'Pedir financiamiento')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "106946eb-c74b-46e3-909c-04b65eaf70f8",
      "comment": "",
      "command": "click",
      "target": "linkText=Crédito Automotriz",
      "targets": [
        ["linkText=Crédito Automotriz", "linkText"],
        ["css=#menu-item-1415 > a", "css:finder"],
        ["xpath=//a[contains(text(),'Crédito Automotriz')]", "xpath:link"],
        ["xpath=//li[@id='menu-item-1415']/a", "xpath:idRelative"],
        ["xpath=//a[contains(@href, 'https://tanner.cl/solicitud-credito-automotriz/')]", "xpath:href"],
        ["xpath=//div[3]/div/div[2]/ul/li/a", "xpath:position"],
        ["xpath=//a[contains(.,'Crédito Automotriz')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "5f20b84b-1a24-47fa-aab2-30280ab99f46",
      "comment": "",
      "command": "mouseOver",
      "target": "id=button-acceso-clientes",
      "targets": [
        ["id=button-acceso-clientes", "id"],
        ["linkText=Acceso Clientes", "linkText"],
        ["css=#button-acceso-clientes", "css:finder"],
        ["xpath=//a[contains(text(),'Acceso Clientes')]", "xpath:link"],
        ["xpath=//a[@id='button-acceso-clientes']", "xpath:attributes"],
        ["xpath=//div[@id='menu_mobile_top']/div/div/div/a", "xpath:idRelative"],
        ["xpath=//a[contains(@href, '#collapse_clientes_mobile')]", "xpath:href"],
        ["xpath=//div/a", "xpath:position"],
        ["xpath=//a[contains(.,'Acceso Clientes')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "243bab46-9a63-4466-9794-124a8deae630",
      "comment": "",
      "command": "click",
      "target": "css=.hamburger-box",
      "targets": [
        ["css=.hamburger-box", "css:finder"],
        ["xpath=//button[@id='hamburger_button']/span", "xpath:idRelative"],
        ["xpath=//nav/button/span", "xpath:position"],
        ["xpath=//span[contains(.,'Menu')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "a8b69946-1d4a-4fb3-ab84-d5579da636f7",
      "comment": "",
      "command": "click",
      "target": "css=#menu-menu-barra-superior-1 > .menu-item-958 > a",
      "targets": [
        ["css=#menu-menu-barra-superior-1 > .menu-item-958 > a", "css:finder"],
        ["xpath=(//a[contains(text(),'Nosotros')])[2]", "xpath:link"],
        ["xpath=//ul[@id='menu-menu-barra-superior-1']/li/a", "xpath:idRelative"],
        ["xpath=(//a[contains(@href, 'https://tanner.cl/sobre-nosotros/')])[2]", "xpath:href"],
        ["xpath=//nav/div/div/div/div/ul/li/a", "xpath:position"]
      ],
      "value": ""
    }]
  }],
  "suites": [{
    "id": "9f437829-bc76-432b-9c24-5342e4d4c9b7",
    "name": "Default Suite",
    "persistSession": false,
    "parallel": false,
    "timeout": 300,
    "tests": []
  }],
  "urls": ["https://tanner.cl/"],
  "plugins": []
}