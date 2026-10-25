public class Produk {
    // Atribut produk
    int nomor;
    String nama;
    double harga;

    // Constructor
    public Produk(int nomor, String nama, double harga) {
        this.nomor = nomor;
        this.nama  = nama;
        this.harga = harga;
    }

    // Method untuk menampilkan info produk
    public void tampilkan() {
        System.out.println(nomor + ". " + nama + " - " + harga);
    }
}