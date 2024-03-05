package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class StarapprehendorderControler
   {
      
      private static var _instance:com.robot.app.control.StarapprehendorderControler;
      
      public static var nowlevel:int;
      
      public static const ORDER_GAME_TASK_OVER:String = "ordergametaskover";
       
      
      public function StarapprehendorderControler()
      {
         super();
         EventManager.addEventListener(ORDER_GAME_TASK_OVER,gameoverhandl);
      }
      
      private static function gameoverhandl(param1:Event) : void
      {
         var e:Event = param1;
         SocketConnection.sendByQueue(45677,[3,0],function(param1:*):void
         {
            instance.overtask();
         });
      }
      
      public static function init(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([13931],function(param1:Array):void
         {
            nowlevel = param1[0];
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function get instance() : com.robot.app.control.StarapprehendorderControler
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.StarapprehendorderControler();
         }
         return _instance;
      }
      
      public function starttask() : void
      {
         switch(nowlevel)
         {
            case 0:
               ModuleManager.showAppModule("StarapprehendorderFightPanel",1);
               break;
            case 1:
               ModuleManager.showAppModule("SummerGameCity0729Panel");
               break;
            case 2:
               MapManager.changeMap(11302);
               break;
            case 3:
               ModuleManager.showAppModule("StarapprehendorderFightPanel",2);
               break;
            case 4:
               ModuleManager.showAppModule("StarapprehendorderFightPanel",5);
               break;
            case 5:
               ModuleManager.showAppModule("StarapprehendorderFightPanel",8);
               break;
            case 6:
               ModuleManager.showAppModule("StarapprehendorderFinalFightPanel");
         }
      }
      
      public function overtask() : void
      {
         var numarr:Array = null;
         numarr = ["一","二","三","四","五","六"];
         KTool.getMultiValue([13931],function(param1:Array):void
         {
            var arr:Array = param1;
            var dif:int = arr[0] - nowlevel;
            if(dif > 0)
            {
               Alarm.show("经过一番摸索，你发现了第" + numarr[nowlevel] + "张线索纸条！");
               if(nowlevel == 2)
               {
                  MapManager.changeMapWithCallback(1202,function():void
                  {
                     ModuleManager.showAppModule("StarapprehendorderMainPanel");
                  });
               }
               else if(nowlevel == 1)
               {
                  ModuleManager.showAppModule("StarapprehendorderMainPanel");
               }
            }
            nowlevel = arr[0];
         });
      }
   }
}
