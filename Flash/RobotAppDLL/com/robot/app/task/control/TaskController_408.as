package com.robot.app.task.control
{
   import com.robot.app.mapProcess.MapProcess_40;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.camera.MapCamera;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class TaskController_408
   {
      
      public static var TRAVEL_TASK_TYPE:uint = 5;
       
      
      public function TaskController_408()
      {
         super();
      }
      
      public static function start() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
      }
      
      private static function onMapSwitchComplete(param1:MapEvent) : void
      {
         var evt:MapEvent = param1;
         var mapID:uint = uint(MapManager.currentMap.id);
         var str:String = "";
         var handStr:String = "";
         switch(mapID)
         {
            case 30:
               if(TRAVEL_TASK_TYPE == 0)
               {
                  str = "小家伙！这里就是赫尔卡星！这里以前还生活着很多机械精灵呢！知道吗，我还听说这里有很多传奇故事呢！快看！那个是比比鼠！";
                  handStr = "环球之旅怎能少了照片做纪念呢？";
                  break;
               }
               return;
               break;
            case 15:
               if(TRAVEL_TASK_TYPE == 1)
               {
                  str = "火山星果然名副其实哟！哎呀呀#3！我全身好烫哦！小家伙我告诉你，这里曾经还生活着一个叫做格林的稀有精灵呢！只是它现在去其他地方旅行咯！我真希望再见到它……";
                  handStr = "拍拍拍……电子拍照留念咯！";
                  break;
               }
               return;
               break;
            case 40:
               (MapProcessConfig.currentProcessInstance as MapProcess_40).hideSceneObj();
               if(TRAVEL_TASK_TYPE == 2)
               {
                  str = "晶莹剔透的地方！这里的一切好美……左边站立的那个精灵应该就是阿克希亚！博士曾经告诉我，它一直守护着塞西利亚的冰之世界，我真想了解更多关于它的事情呢……";
                  handStr = "环球之旅又怎能够少了照片做纪念呢？";
                  break;
               }
               return;
               break;
            case 47:
               if(TRAVEL_TASK_TYPE == 3)
               {
                  str = "可恶的海盗！他们竟然在这里肆意开采，把这的生态环境弄的一团糟！可恶！你知道吗？我们曾经还在这里和他们大打出手呐！我可是永无畏惧的哟！";
                  handStr = "来！我们来拍照吧！";
                  break;
               }
               return;
               break;
            case 54:
               if(TRAVEL_TASK_TYPE == 4)
               {
                  str = "哈哈！这里我可是记忆犹新啊！我就是在这里认识哈莫的！我们找个好地方拍张照片留念吧！";
                  handStr = "我准备好咯！";
                  break;
               }
               return;
               break;
            default:
               return;
         }
         NpcDialog.show(NPC.SEER,[str],[handStr],[function():void
         {
            var _loc1_:* = new MapCamera();
            LevelManager.appLevel.addChild(_loc1_);
            EventManager.addEventListener(MapCamera.SAVE_PICTURE,onSavePicture);
         }]);
      }
      
      private static function onSavePicture(param1:DynamicEvent) : void
      {
         var str_0:String;
         var handStr_0:String;
         var evt:DynamicEvent = param1;
         EventManager.removeEventListener(MapCamera.SAVE_PICTURE,onSavePicture);
         str_0 = "";
         handStr_0 = "";
         switch(TRAVEL_TASK_TYPE)
         {
            case 0:
               str_0 = "酷！哈哈！#8赫尔卡星留念！走！我们这就去告诉皮皮族长去！它就在0xff0000克洛斯星0xffffff上等我们呐！";
               handStr_0 = "皮皮！飞呀飞呀！哈哈！";
               break;
            case 1:
               str_0 = "帕诺星系里还有许多其它稀奇古怪的星球哦！走！我们这就去0xff0000克洛斯星0xffffff告诉皮皮族长去！我们明天再去其他星球转转吧！";
               handStr_0 = "皮皮！飞呀飞呀！哈哈！";
               break;
            case 2:
               str_0 = "赫尔卡星、塞西利亚星可都是帕诺星系中数一数二的星球哦！怎么样！大开眼界了吧！我们去0xff0000克洛斯星0xffffff告诉皮皮族长吧，我们所看到的都告诉它！";
               handStr_0 = "不知道波克尔族长有没有来过呢？";
               break;
            case 3:
               str_0 = "其实当初的迪恩也是我们在这里结识的……不知道现在的他好吗……#2算了！不想啦！我这就带你去找族长！";
               handStr_0 = "族长还在克洛斯星等我们呢！";
               break;
            case 4:
               str_0 = "你想不想把你看到的一切去告诉波克尔族长呀？走！我们回克洛斯星咯！把你的旅行经历告诉你的家族成员们吧！";
               handStr_0 = "皮皮环球之旅万岁！";
         }
         NpcDialog.show(NPC.SEER,[str_0],[handStr_0],[function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
            TasksManager.complete(408,0);
         }]);
      }
   }
}
