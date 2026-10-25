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
            System.out.println("     Selamat Datang");
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

        double total = 0;                          // total belanja
        ArrayList<String> nota = new ArrayList<>(); // <-- tempat simpan baris nota
        boolean tambahLagi = true;

        while (tambahLagi) {
            // Minta nomor produk
            System.out.print("Masukkan nomor produk : ");
            int nomor = Integer.parseInt(input.nextLine());

            Produk p = cariProduk(nomor);
            if (p == null) {
                System.out.println("Produk tidak ditemukan!");
                continue;
            }

            // Minta jumlah beli
            System.out.print("Masukkan jumlah beli  : ");
            int jumlah = Integer.parseInt(input.nextLine());

            // Hitung subtotal
            double subtotal = p.harga * jumlah;
            total = total + subtotal;

            // Susun 1 baris nota, lalu SIMPAN ke ArrayList
            String baris = p.nama + " x " + jumlah
                        + " @ " + Produk.rupiah(p.harga)
                        + " = " + Produk.rupiah(subtotal);
            nota.add(baris);

            // Tampilkan konfirmasi cepat
            // System.out.println(">> " + baris);

            // Tanya mau tambah lagi?
            System.out.print("\nTambah produk lagi? (y/n): ");
            String jawab = input.nextLine();

            if (!jawab.equalsIgnoreCase("y")) {
                System.out.println("Input tidak valid, nota dicetak");
                tambahLagi = false; // berhenti kalau bukan 'y'
            }
        }

        // ============================
        // CETAK NOTA
        // ============================
        System.out.println();
        System.out.println("=========== NOTA ===========");
        for (int i = 0; i < nota.size(); i++) {
            System.out.println(nota.get(i));
        }
        System.out.println("----------------------------");
        System.out.println("TOTAL BAYAR : " + Produk.rupiah(total));
        System.out.println("============================");
        System.out.println();
        jalan = false;
    }

}