package com.robot.core.manager.book
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   
   public class BookManager
   {
      
      private static var _panel:AppModel;
      
      private static var _curBookId:String;
      
      private static var _frame:int;
       
      
      public function BookManager()
      {
         super();
      }
      
      private static function showNow(param1:String) : void
      {
         _panel = new AppModel(ClientConfig.getBookModule(param1),"正在打开手册");
         _panel.setup();
         _panel.init(_frame);
         _panel.show();
         _curBookId = param1;
      }
      
      public static function hide() : void
      {
         if(_panel)
         {
            _panel.hide();
         }
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.hide();
            _panel.destroy();
         }
      }
      
      public static function show(param1:String, param2:int = 1) : void
      {
         _frame = param2;
         if(_panel == null)
         {
            showNow(param1);
            if(param1 == "PetAmalgamationBookPanel")
            {
               _panel = null;
            }
         }
         else if(_curBookId == param1)
         {
            _panel.init(_frame);
            _panel.show();
         }
         else
         {
            _panel.destroy();
            _panel = null;
            showNow(param1);
         }
      }
   }
}
