package com.robot.app.quickWord
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class QuickWord
   {
       
      
      private var cls:Class;
      
      private var xml:XML;
      
      private var menuContainer:Sprite;
      
      private var qw:com.robot.app.quickWord.QuickWordList;
      
      public function QuickWord()
      {
         this.cls = QuickWord_cls;
         super();
         this.xml = new XML(new this.cls());
      }
      
      public function show() : void
      {
         if(this.qw)
         {
            this.hide();
            return;
         }
         this.qw = new com.robot.app.quickWord.QuickWordList(this.xml);
         this.qw.x = 178;
         this.qw.y = 90;
         this.qw.addEventListener(Event.CLOSE,this.closeQw);
         LevelManager.toolsLevel.addChild(this.qw);
         MainManager.getStage().addEventListener(MouseEvent.CLICK,this.stageClick);
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this.qw);
         this.closeQw(null);
      }
      
      private function stageClick(param1:MouseEvent) : void
      {
         if(this.qw.hitTestPoint(MainManager.getStage().mouseX,MainManager.getStage().mouseY,true) == false)
         {
            this.qw.destroy();
         }
      }
      
      private function closeQw(param1:Event) : void
      {
         this.qw.removeEventListener(Event.CLOSE,this.closeQw);
         this.qw = null;
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,this.stageClick);
      }
   }
}
