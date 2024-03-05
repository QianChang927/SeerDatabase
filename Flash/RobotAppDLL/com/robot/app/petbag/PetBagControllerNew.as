package com.robot.app.petbag
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.petbag.ui.PetBagPanelNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagControllerNew
   {
      
      public static var _panel:PetBagPanelNew;
      
      public static var isOpenPetBagNew0422:Boolean = false;
      
      public static var isHasXteamEffect:Boolean;
      
      public static const xteamPetArr:Array = [1446,1447,1394,1395,1587,1588,1483,1484,1689,1688,1755,1756];
      
      public static const NO_BAG_MAP:Array = [1040,1047,1066];
      
      private static var mimiList:Array = [467508986,11310995,41267630,501667806,216664912,64601024,119196395,168091294];
      
      private static var hasInit:Boolean = false;
       
      
      public function PetBagControllerNew()
      {
         super();
      }
      
      public static function show() : void
      {
         if(Boolean(MapManager.currentMap) && NO_BAG_MAP.indexOf(MapManager.currentMap.id) != -1)
         {
            Alarm.show("该地图不能使用背包功能！");
            return;
         }
         if(Boolean(PetBagController._panel) && Boolean(DisplayUtil.hasParent(PetBagController._panel)))
         {
            PetBagController._panel.hide();
            PetBagController._panel = null;
         }
         else if(NewSeerGuideController.isNewSeer)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetBag2017"));
         }
         else if(!BufferRecordManager.getMyState(1307))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetBag2017"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADPetBagPanelNew"));
         }
      }
      
      public static function get panel() : PetBagPanelNew
      {
         if(_panel == null)
         {
            _panel = new PetBagPanelNew();
         }
         return _panel;
      }
      
      public static function showByBuffer() : void
      {
         if(Boolean(MapManager.currentMap) && NO_BAG_MAP.indexOf(MapManager.currentMap.id) != -1)
         {
            Alarm.show("该地图不能使用背包功能！");
            return;
         }
         checkXteamEffect(function():void
         {
            if(!hasInit)
            {
               BufferRecordManager.setMyState(245,false,function():void
               {
                  BufferRecordManager.setMyState(1307,false,function():void
                  {
                     show();
                  });
               });
               hasInit = true;
            }
            else if(BufferRecordManager.getMyState(245))
            {
               PetBagController.show();
            }
            else
            {
               show();
            }
         });
      }
      
      public static function checkXteamEffect(param1:Function) : void
      {
         var id:uint = 0;
         var func:Function = param1;
         var hasXteam:Boolean = false;
         for each(id in xteamPetArr)
         {
            if(PetManager.containsBagForID(id))
            {
               hasXteam = true;
               break;
            }
         }
         if(hasXteam)
         {
            DebugTrace.show("检查forever值741：----------检查X战队独有加成特性是否激活-----------------");
            KTool.getForeverNum(741,function(param1:uint):void
            {
               if(param1 == 1)
               {
                  isHasXteamEffect = true;
                  func();
               }
               else
               {
                  isHasXteamEffect = false;
                  func();
               }
               DebugTrace.show("检查forever值741：---------------------------" + isHasXteamEffect);
            });
         }
         else
         {
            func();
         }
      }
   }
}
