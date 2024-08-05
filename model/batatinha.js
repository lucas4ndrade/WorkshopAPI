const { default: mongoose } = require("mongoose");

const batatinhaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: String,
}, { collection: 'batatinhas', versionKey: false, timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' }});

module.exports = mongoose.model('Batatinha', batatinhaSchema);