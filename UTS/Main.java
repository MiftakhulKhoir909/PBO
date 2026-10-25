import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    // Daftar semua produk digabung di sini
    static ArrayList<Produk> semuaProduk = new ArrayList<>();
    static Scanner input = new Scanner(System.in);
    static boolean jalan = true;

    public static void main(String[] args) {

        // Ambil data dari MediaTulis dan AlatTulis
        semuaProduk.addAll(MediaTulis.daftarProduk());
        semuaProduk.addAll(AlatTulis.daftarProduk());

        while (jalan) {
            System.out.println("===========================");
            System.out.println("     POS Toko Buku 99");
            System.out.println("===========================");

            tampilkanProduk();

            System.out.println();
            System.out.println("=== MENU ===");
            System.out.println("1. Checkout");
            System.out.println("2. Close");
            System.out.print("Pilih menu: ");
            String pilih = input.nextLine();

            if (pilih.equals("1")) {
                checkout();
            } else if (pilih.equals("2")) {
                jalan = false;
                System.out.println("Program ditutup. Terima kasih!");
            } else {
                System.out.println("Pilihan tidak ada!");
            }
        }
    }

    // Tampilkan semua produk
    static void tampilkanProduk() {
        System.out.println();
        System.out.println("=== DAFTAR PRODUK ===");
        for (int i = 0; i < semuaProduk.size(); i++) {
            semuaProduk.get(i).tampilkan();
        }
    }

    // Cari produk berdasarkan nomor
    static Produk cariProduk(int nomor) {
        for (int i = 0; i < semuaProduk.size(); i++) {
            if (semuaProduk.get(i).nomor == nomor) {
                return semuaProduk.get(i);
            }
        }
        return null; // tidak ketemu
    }

    // Proses checkout
static void checkout() {
    System.out.println();
    System.out.println("=== CHECKOUT ===");

    double total = 0;
    ArrayList<String> nota = new ArrayList<>();
    boolean tambahLagi = true;

    // 1) Input produk sampai user jawab tidak jawab 'y'
    while (tambahLagi) {
        System.out.print("Masukkan nomor produk : ");
        int nomor = Integer.parseInt(input.nextLine());

        Produk p = cariProduk(nomor);
        if (p == null) {
            System.out.println("Produk tidak ditemukan!");
            continue;
        }

        System.out.print("Masukkan jumlah beli  : ");
        int jumlah = Integer.parseInt(input.nextLine());

        double subtotal = p.harga * jumlah;
        total = total + subtotal;

        // Simpan ke nota (angka biasa, tanpa Rp.)
        String baris = p.nama + " x " + jumlah
                     + " @ " + (long) p.harga
                     + " = " + (long) subtotal;
        nota.add(baris);
        System.out.println(">> " + baris);

        System.out.print("\nTambah produk lagi? (y/n): ");
        String jawab = input.nextLine();
        if (!jawab.equalsIgnoreCase("y")) {
            tambahLagi = false;
        }
    }

    // 2) Tampilkan total, lalu minta uang customer
    System.out.println();
    System.out.println("TOTAL BAYAR : " + (long) total);
    System.out.print("Uang customer : ");
    double uang = Double.parseDouble(input.nextLine());

    // 3) Kalau uang kurang, minta lagi (loop)
    while (uang < total) {
        System.out.println("Uang kurang! Total = " + (long) total);
        System.out.print("Uang customer : ");
        uang = Double.parseDouble(input.nextLine());
    }

    // 4) Hitung kembalian
    double kembalian = uang - total;

    // 5) Cetak nota
    System.out.println();
    System.out.println("=========== NOTA ===========");
    for (int i = 0; i < nota.size(); i++) {
        System.out.println(nota.get(i));
    }
    System.out.println("----------------------------");
    System.out.println("Total      : " + (long) total);
    System.out.println("Bayar      : " + (long) uang);
    System.out.println("Kembalian  : " + (long) kembalian);
    System.out.println("============================");
    System.out.println();

    // 6) Tutup program setelah nota dicetak
    System.exit(0);
}
}