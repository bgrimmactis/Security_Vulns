/*
Project: Security Scan Results Display
Created by:  Barbara Grimm Actis
Date:  6/15/2017
Function:  This file contains the app and app controller settings.
*/

var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.selection']);

app.controller('MainCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', function ($scope, $http, $log, $timeout, uiGridConstants) {

    $scope.columns = [{ field: 'VulnId' }, { field: 'VulnType' }, { field: 'Severity' }, { field: 'FileName' }, { field: 'LineNumber' }, { field: 'BaseURL' }, { field: 'OWASPCategory' }];
    
    $scope.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        columnDefs: $scope.columns,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: true
    };   
   
    $scope.gridOptions.multiSelect = false;
    
    $scope.myData = [
    { VulnId: 001, VulnType: "SQL Injection", Severity: "Critical", FileName: "infoForm1.html", LineNumber: "87", BaseURL: "signup/infoForm1.html", OWASPCategory: "A1", CWE: "89", CWELink: "http://cwe.mitre.org/data/definitions/89.html", Preview: "images/infoForm1.png" },
    { VulnId: 002, VulnType: "SQL Injection", Severity: "Critical", FileName: "infoForm1.html", LineNumber: "94", BaseURL: "signup/infoForm1.html", OWASPCategory: "A1", CWE: "89", CWELink: "http://cwe.mitre.org/data/definition/89.html", Preview: "images/infoForm1a.png"  },
    { VulnId: 003, VulnType: "XSS", Severity: "Major", FileName: "form1Validate.html", LineNumber: "9", BaseURL: "signup/form1Validate.html", OWASPCategory: "A3", CWE: "79", CWELink: "http://cwe.mitre.org/data/definitions/79.html", Preview: "images/form1Validate.png"  },
    { VulnId: 004, VulnType: "XSS", Severity: "Critical", FileName: "form2Validate.html", LineNumber: "11", BaseURL: "signup/form2Validate.html", OWASPCategory: "A3", CWE: "79", CWELink: "http://cwe.mitre.org/data/definitions/79.html", Preview: "images/form2Validate.png" },
    { VulnId: 005, VulnType: "SQL Injection", Severity: "Major", FileName: "infoForm2.html", LineNumber: "258", BaseURL: "signup/infoForm2.html", OWASPCategory: "A1", CWE: "89", CWELink: "http://cwe.mitre.org/data/definitions/89.html", Preview: "images/infoForm2.png"  },
    { VulnId: 006, VulnType: "SQL Injection", Severity: "Major", FileName: "infoForm2.html", LineNumber: "272", BaseURL: "signup/infoForm2.html", OWASPCategory: "A1", CWE: "89", CWELink: "http://cwe.mitre.org/data/definitions/89.html", Preview: "images/infoForm2a.png"  }
    ];

    $scope.gridOptions.data = $scope.myData;

    $scope.gridOptions.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
    
        $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {

            var vulnId = row.entity.VulnId;
            var vulnType = row.entity.VulnType;

            var cWE = row.entity.CWE;
			var cWELink = row.entity.CWELink;
			var baseURL = row.entity.BaseURL;
			var preview = row.entity.Preview;
            
            console.log(vulnId);
            console.log(vulnType);

            console.log(cWE);
			console.log(cWELink);
			console.log(baseURL);
			console.log(preview);

            $scope.VulnId = vulnId;
            $scope.VulnType = vulnType;

            $scope.CWE = cWE;
			$scope.CWELink = cWELink;
			$scope.BaseURL = baseURL;
			$scope.Preview = preview;
            
        });
       
    };

}]);
