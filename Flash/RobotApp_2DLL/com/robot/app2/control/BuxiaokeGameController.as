package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class BuxiaokeGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
       
      
      public function BuxiaokeGameController()
      {
         super();
      }
      
      public static function startGame(param1:int) : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("buxiaokeGetGift"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
         _index = param1;
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(46157,function():void
         {
            _game = e.getContent() as Sprite;
            _game["getStage"](MainManager.getStage());
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game.addEventListener("game_over",onCloseGame);
         },67);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var nums:Array;
         var arr1:Array;
         var arr2:Array;
         var i:int;
         var tempnum1:Array;
         var tempnum2:Array;
         var e:* = param1;
         if(e.info == null)
         {
            _game.removeEventListener("game_over",onCloseGame);
            LevelManager.stage.frameRate = 24;
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
            SocketConnection.sendWithCallback(46159,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BuxiaokePanel"));
            });
            return;
         }
         nums = e.info as Array;
         arr1 = [];
         arr2 = [];
         i = 0;
         while(i < nums.length)
         {
            if(i == 0)
            {
               arr1[0] = nums[0];
            }
            else if(i == 1)
            {
               arr1[1] = nums[2];
            }
            else if(i == 2)
            {
               arr1[2] = nums[1];
            }
            else if(i == 3)
            {
               arr1[3] = nums[3];
            }
            else if(i == 4)
            {
               arr2[0] = nums[4];
            }
            else if(i == 6)
            {
               arr2[1] = nums[5];
            }
            else if(i == 7)
            {
               arr2[2] = nums[6];
            }
            i++;
         }
         arr2[3] = 0;
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         tempnum1 = KTool.arrayToInt(arr1);
         tempnum2 = KTool.arrayToInt(arr2);
         SocketConnection.sendWithCallback(46158,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BuxiaokePanel"));
         },tempnum1,tempnum2);
      }
   }
}
