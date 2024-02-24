// app/service/user.js
const Service = require('egg').Service;

class SchemaService extends Service {
  async querySchema(tmpName) {
    let results = [];
    if (tmpName) {
    // query
      results = await this.app.mysql.select('schema', {
        where: { template_name: tmpName },
      });
    } else {
      results = await this.app.mysql.select('schema');
    }
    return results;
  }

  async querySchemasByCategory(categoryCode) {
    let results = [];
    if (categoryCode) {
    // query
      results = await this.app.mysql.select('schema', {
        where: { template_type_code: categoryCode },
      });
    } else {
      results = await this.app.mysql.select('schema');
    }
    return results;
  }

  async addSchema(param) {
    try {
      const { template_name, template_json } = param;
      console.log(template_name, template_json);
      const params = {
        template_name,
        template_json,
      };
      const result = await this.app.mysql.insert('schema', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result.affectedRows;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  async addSchemaType(param) {
    try {
      const { schema_type, type_code, type } = param;
      console.log('addSchemaType param', schema_type, type_code, type);
      const params = {
        schema_type,
        type_code,
        type,
      };
      const result = await this.app.mysql.insert('schema_type', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result.affectedRows;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  async querySchemaType(param) {
    let results = [];
    if (param) {
    // query
      results = await this.app.mysql.select('schema_type', {
        where: { type: param },
      });
    } else {
      results = await this.app.mysql.select('schema_type');
    }
    return results;
  }
}

module.exports = SchemaService;
