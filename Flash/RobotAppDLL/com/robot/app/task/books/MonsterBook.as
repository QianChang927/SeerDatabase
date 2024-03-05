package com.robot.app.task.books
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class MonsterBook
   {
      
      private static var PATH:String = ClientConfig.getResPath("book/monsterBook.swf");
      
      private static var mc:MovieClip;
      
      private static var app:ApplicationDomain;
      
      private static var _frame:uint;
       
      
      public function MonsterBook()
      {
         super();
      }
      
      public static function loadPanel(param1:uint = 1) : void
      {
         var _loc2_:MCLoader = null;
         _frame = param1;
         if(!mc)
         {
            _loc2_ = new MCLoader(PATH,LevelManager.topLevel,1,"正在打开精灵手册");
            _loc2_.addEventListener(MCLoadEvent.SUCCESS,onLoad);
            _loc2_.doLoad();
         }
         else
         {
            mc.gotoAndStop(param1);
            show();
         }
      }
      
      private static function onLoad(param1:MCLoadEvent) : void
      {
         app = param1.getApplicationDomain();
         mc = new (app.getDefinition("monsterBook") as Class)() as MovieClip;
         mc.x = 445;
         mc.y = 262;
         mc.cacheAsBitmap = true;
         show();
      }
      
      private static function show() : void
      {
         var closeBtn:SimpleButton;
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.addChild(mc);
         closeBtn = mc["closeBtn"];
         closeBtn.addEventListener(MouseEvent.CLICK,closeHandler);
         mc.gotoAndStop(1);
         setTimeout(function():void
         {
            mc.gotoAndStop(_frame);
         },50);
      }
      
      private static function closeHandler(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(mc);
         LevelManager.openMouseEvent();
      }
   }
}
