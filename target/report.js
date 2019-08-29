$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Ascenario.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate a customer Id",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Provide valid details",
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_Provide_valid_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Bscenout.feature");
formatter.feature({
  "name": "Fill the form",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.step({
  "name": "User provide the details in form \"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003cAddress\u003e\",\"\u003cMob\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "Address",
        "Mob"
      ]
    },
    {
      "cells": [
        "kranti",
        "kiran",
        "kranti@gmail.com",
        "ANDHIRA",
        "143014"
      ]
    },
    {
      "cells": [
        "kiran",
        "kranti",
        "kranthi@gmail.com",
        "Chennai",
        "88888"
      ]
    },
    {
      "cells": [
        "kk",
        "tk",
        "kktk@gmail.com",
        "Karnataka",
        "7777"
      ]
    }
  ]
});
formatter.scenario({
  "name": "customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide the details in form \"kranti\",\"kiran\",\"kranti@gmail.com\",\"ANDHIRA\",\"143014\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_provide_the_details_in_form(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide the details in form \"kiran\",\"kranti\",\"kranthi@gmail.com\",\"Chennai\",\"88888\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_provide_the_details_in_form(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide the details in form \"kk\",\"tk\",\"kktk@gmail.com\",\"Karnataka\",\"7777\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_provide_the_details_in_form(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Conedlist.feature");
formatter.feature({
  "name": "Provide details using single dimensional list",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Providing data using list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details1",
  "rows": [
    {
      "cells": [
        "kranti",
        "kiran",
        "kranthi@gmail.com",
        "andhra",
        "9885398386"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_provide_valid_details1(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Donedmap.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate a customer Id",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details customer",
  "rows": [
    {
      "cells": [
        "fname",
        "kiran"
      ]
    },
    {
      "cells": [
        "lname",
        "kranti"
      ]
    },
    {
      "cells": [
        "gmail",
        "kranti@gmail.com"
      ]
    },
    {
      "cells": [
        "Address",
        "vijayawda"
      ]
    },
    {
      "cells": [
        "mob",
        "8608578638"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_provide_valid_details_customer(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Etwodlist.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate a customer Id",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer Should provide the Data",
  "rows": [
    {
      "cells": [
        "kranti",
        "kiran",
        "kranthi@gmail.com",
        "andhra",
        "9885398386"
      ]
    },
    {
      "cells": [
        "kiran",
        "kk",
        "kkk@gmail.com",
        "vijayawada",
        "424242424"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_Should_provide_the_Data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Ftwodmap.feature");
formatter.feature({
  "name": "Provide details using two dimensional map",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Providing data using map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddId.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddId.user_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer Should provide the info",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "Address",
        "Mob"
      ]
    },
    {
      "cells": [
        "kranti",
        "kiran",
        "kranti@gmail.com",
        "ANDHIRA",
        "99999"
      ]
    },
    {
      "cells": [
        "kiran",
        "kranti",
        "kranthi@gmail.com",
        "Chennai",
        "88888"
      ]
    },
    {
      "cells": [
        "kk",
        "tk",
        "kktk@gmail.com",
        "Karnataka",
        "7777"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddId.user_Should_provide_the_info(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddId.to_verify_the_customer_id_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
});