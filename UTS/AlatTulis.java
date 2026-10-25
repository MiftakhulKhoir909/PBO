import java.util.ArrayList;

public class AlatTulis extends Produk {

    public AlatTulis(int nomor, String nama, double harga) {
        super(nomor, nama, harga);
    }

    // Daftar produk alat tulis
    public static ArrayList<Produk> daftarProduk() {
        ArrayList<Produk> list = new ArrayList<>();
        list.add(new AlatTulis(4, "Pulpen",    3000));
        list.add(new AlatTulis(5, "Pensil",    2500));
        list.add(new AlatTulis(6, "Penghapus", 1500));
        list.add(new AlatTulis(7, "Penggaris", 4000));
        return list;
    }
}