package com.riaidea.utils.zip
{
   public class ZipConstants
   {
      
      internal static const LOCSIG:uint = 67324752;
      
      internal static const EXTSIG:uint = 134695760;
      
      internal static const CENSIG:uint = 33639248;
      
      internal static const ENDSIG:uint = 101010256;
      
      internal static const LOCHDR:int = 30;
      
      internal static const EXTHDR:int = 16;
      
      internal static const CENHDR:int = 46;
      
      internal static const ENDHDR:int = 22;
      
      internal static const LOCVER:int = 4;
      
      internal static const LOCFLG:int = 6;
      
      internal static const LOCHOW:int = 8;
      
      internal static const LOCTIM:int = 10;
      
      internal static const LOCCRC:int = 14;
      
      internal static const LOCSIZ:int = 18;
      
      internal static const LOCLEN:int = 22;
      
      internal static const LOCNAM:int = 26;
      
      internal static const LOCEXT:int = 28;
      
      internal static const EXTCRC:int = 4;
      
      internal static const EXTSIZ:int = 8;
      
      internal static const EXTLEN:int = 12;
      
      internal static const CENVEM:int = 4;
      
      internal static const CENVER:int = 6;
      
      internal static const CENFLG:int = 8;
      
      internal static const CENHOW:int = 10;
      
      internal static const CENTIM:int = 12;
      
      internal static const CENCRC:int = 16;
      
      internal static const CENSIZ:int = 20;
      
      internal static const CENLEN:int = 24;
      
      internal static const CENNAM:int = 28;
      
      internal static const CENEXT:int = 30;
      
      internal static const CENCOM:int = 32;
      
      internal static const CENDSK:int = 34;
      
      internal static const CENATT:int = 36;
      
      internal static const CENATX:int = 38;
      
      internal static const CENOFF:int = 42;
      
      internal static const ENDSUB:int = 8;
      
      internal static const ENDTOT:int = 10;
      
      internal static const ENDSIZ:int = 12;
      
      internal static const ENDOFF:int = 16;
      
      internal static const ENDCOM:int = 20;
      
      public static const STORED:int = 0;
      
      public static const DEFLATED:int = 8;
       
      
      public function ZipConstants()
      {
         super();
      }
   }
}
