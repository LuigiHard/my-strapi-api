'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const products = await strapi.entityService.findMany('api::product.product', {
      ...query,
      populate: { image: true },
    });

    const formattedProducts = products.map(product => ({
      id: product.id,
      attributes: {
        title: product.title,
        company: product.company,
        description: product.description,
        featured: product.featured,
        category: product.category,
        image: product.image ? product.image.url : null,
        price: product.price,
        shipping: product.shipping,
        colors: product.colors,
      }
    }));

    return { data: formattedProducts, meta: { pagination: ctx.response.get('X-Total-Count') } };
  }
}));
