package com.robot.app.mapProcess.control
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.InteractiveObject;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HadesaEnvolutionController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function HadesaEnvolutionController()
      {
         super();
      }
      
      public static function initTaskForMap497(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BufferRecordManager.getState(MainManager.actorInfo,467))
         {
            ToolBarController.showOrHideAllUser(false);
            OgreController.isShow = false;
            MainManager.selfVisible = false;
            setEquipment(false);
            AnimateManager.playMcAnimate(_map.conLevel["hadesaEnvoMC"],1,"mc1",function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/hadesaEnvoCartoon"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("hadesaEnvoFakeFighting"),function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["hadesaEnvoMC"],2,"mc2",function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,467,true);
                        DisplayUtil.removeForParent(_map.conLevel["hadesaEnvoMC"]);
                        MainManager.selfVisible = true;
                        ToolBarController.showOrHideAllUser(true);
                        OgreController.isShow = true;
                        setEquipment(true);
                        ModuleManager.showModule(ClientConfig.getAppModule("HadesaEnvolution/HadesaEnvolutionWarehouse"),"正在打开面板……",0);
                     });
                  });
               });
            });
         }
         else
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            DisplayUtil.removeForParent(_map.conLevel["hadesaEnvoMC"]);
            setEquipment(true);
         }
      }
      
      private static function setEquipment(param1:Boolean) : void
      {
         (_map.conLevel["openPicBtn"] as SimpleButton).visible = param1;
         DisplayUtil.removeForParent(_map.conLevel["NPCbenzhu"]);
         if(param1)
         {
            (_map.conLevel["openPicBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,onOpenPic);
            ToolTipManager.add(_map.conLevel["openPicBtn"],"哈德萨进化图");
         }
         else
         {
            (_map.conLevel["openPicBtn"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onOpenPic);
            ToolTipManager.remove(_map.conLevel["openPicBtn"]);
         }
      }
      
      private static function onOpenPic(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HadesaEnvolution/HadesaEnvolutionPic"));
         SocketConnection.send(1022,86052578);
      }
      
      private static function onEnvo(param1:MouseEvent) : void
      {
         var _loc2_:String = (param1.currentTarget as InteractiveObject).name;
         if(_loc2_ == "NPCbenzhu")
         {
            SocketConnection.send(1022,86052579);
         }
         ModuleManager.showModule(ClientConfig.getAppModule("HadesaEnvolution/HadesaEnvolutionWarehouse"),"正在打开面板……",0);
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
         _map = null;
      }
   }
}
