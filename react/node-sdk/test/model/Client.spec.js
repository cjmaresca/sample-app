/*
 * Hydrogen Admin API
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenAdminApi);
  }
}(this, function(expect, HydrogenAdminApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Client', function() {
      beforeEach(function() {
        instance = new HydrogenAdminApi.Client();
      });

      it('should create an instance of Client', function() {
        // TODO: update the code to test Client
        expect(instance).to.be.a(HydrogenAdminApi.Client);
      });

      it('should have the property authorities (base name: "authorities")', function() {
        // TODO: update the code to test the property authorities
        expect(instance).to.have.property('authorities');
        // expect(instance.authorities).to.be(expectedValueLiteral);
      });

      it('should have the property createDate (base name: "create_date")', function() {
        // TODO: update the code to test the property createDate
        expect(instance).to.have.property('createDate');
        // expect(instance.createDate).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isAccountNonExpired (base name: "is_account_non_expired")', function() {
        // TODO: update the code to test the property isAccountNonExpired
        expect(instance).to.have.property('isAccountNonExpired');
        // expect(instance.isAccountNonExpired).to.be(expectedValueLiteral);
      });

      it('should have the property isAccountNonLocked (base name: "is_account_non_locked")', function() {
        // TODO: update the code to test the property isAccountNonLocked
        expect(instance).to.have.property('isAccountNonLocked');
        // expect(instance.isAccountNonLocked).to.be(expectedValueLiteral);
      });

      it('should have the property isCredentialsNonExpired (base name: "is_credentials_non_expired")', function() {
        // TODO: update the code to test the property isCredentialsNonExpired
        expect(instance).to.have.property('isCredentialsNonExpired');
        // expect(instance.isCredentialsNonExpired).to.be(expectedValueLiteral);
      });

      it('should have the property isEnabled (base name: "is_enabled")', function() {
        // TODO: update the code to test the property isEnabled
        expect(instance).to.have.property('isEnabled');
        // expect(instance.isEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property tenant (base name: "tenant")', function() {
        // TODO: update the code to test the property tenant
        expect(instance).to.have.property('tenant');
        // expect(instance.tenant).to.be(expectedValueLiteral);
      });

      it('should have the property updateDate (base name: "update_date")', function() {
        // TODO: update the code to test the property updateDate
        expect(instance).to.have.property('updateDate');
        // expect(instance.updateDate).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

    });
  });

}));