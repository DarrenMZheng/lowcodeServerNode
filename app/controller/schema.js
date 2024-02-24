const { Controller } = require('egg');

class SchemaController extends Controller {
  async querySchema() {
    const { ctx } = this;
    const query = this.ctx.query;
    console.log('query tmpName', query);
    const { tmpName } = query;
    const result = await ctx.service.schema.querySchema(tmpName);
    console.log('results', result);
    if (result.length) {
      ctx.body = {
        status: 200,
        msg: '查询成功',
        data: result,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '查询失败',
        data: [],
      };
    }
    return ctx.body;
  }

  async querySchemasByCategory() {
    const { ctx } = this;
    const query = this.ctx.query;
    console.log('query tmpName', query);
    const { categoryCode } = query;
    const result = await ctx.service.schema.querySchemasByCategory(categoryCode);
    console.log('results', result);
    if (result.length) {
      ctx.body = {
        status: 200,
        msg: '查询成功',
        data: result,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '查询失败',
        data: [],
      };
    }
    return ctx.body;
  }

  async addSchema() {
    const { ctx } = this;
    const { tmpName, tmpSchema } = ctx.request.body;
    console.log(tmpName, tmpSchema);
    const param = {
      template_name: tmpName,
      template_json: tmpSchema,
    };
    const result = await ctx.service.schema.addSchema(param);
    console.log('result', result);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '添加成功',
        data: result,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '添加失败',
        data: {},
      };
    }
    return ctx.body;
  }

  /**
   * schemaType: string;
   * typeCode: string;
   * type: 'section' | 'tmp';
   */
  async addSchemaType() {
    const { ctx } = this;
    const { schemaType, typeCode, type } = ctx.request.body;
    console.log(schemaType, typeCode);
    const param = {
      schema_type: schemaType,
      type_code: typeCode,
      type,
    };
    const result = await ctx.service.schema.addSchemaType(param);
    console.log('result', result);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '添加成功',
        data: result,
        success: true,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '添加失败',
        data: {},
        success: false,
      };
    }
    return ctx.body;
  }

  async querySchemaType() {
    const { ctx } = this;
    const query = this.ctx.query;
    console.log('querySchemaType gar', query);
    const { type } = query;
    const result = await ctx.service.schema.querySchemaType(type);
    console.log('results', result);
    if (result.length) {
      ctx.body = {
        status: 200,
        msg: '查询成功',
        data: result,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '查询失败',
        data: [],
      };
    }
    return ctx.body;
  }
}

module.exports = SchemaController;
