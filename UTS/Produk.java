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

    // Method untuk format uang jadi "Rp. 5.000"
    public static String rupiah(double uang) {
        // Ubah ke angka bulat dulu (biar ga ada desimal)
        long nilai = (long) uang;
        String teks = String.valueOf(nilai);

        // Sisipkan titik tiap 3 digit dari belakang
        String hasil = "";
        int hitung = 0;
        for (int i = teks.length() - 1; i >= 0; i--) {
            hasil = teks.charAt(i) + hasil;
            hitung++;
            if (hitung == 3 && i != 0) {
                hasil = "." + hasil;
                hitung = 0;
            }
        }
        return "Rp. " + hasil;
    }

    // Method untuk menampilkan info produk
    public void tampilkan() {
        System.out.println(nomor + ". " + nama + " - " + rupiah(harga));
    }
}