import java.util.ArrayList;

public class MediaTulis extends Produk {

    public MediaTulis(int nomor, String nama, double harga) {
        super(nomor, nama, harga);
    }

    // Daftar produk media tulis
    public static ArrayList<Produk> daftarProduk() {
        ArrayList<Produk> list = new ArrayList<>();
        list.add(new MediaTulis(1, "Buku Tulis",  5000));
        list.add(new MediaTulis(2, "Buku Gambar", 8000));
        list.add(new MediaTulis(3, "Kertas HVS",   500));
        return list;
    }
}