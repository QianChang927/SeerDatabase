package com.robot.module.app.petBag.subModule.petInfo.subModuls
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetGroupExtraEffect
   {
       
      
      private var _tipMC:MovieClip;
      
      private var _path:String = "effectIcon/";
      
      private var _iconMc:MovieClip;
      
      private var _itemId:uint;
      
      private var main:MovieClip;
      
      public function PetGroupExtraEffect()
      {
         super();
      }
      
      public function showIcon(petId:int, ui:MovieClip) : void
      {
         this.main = ui;
         if([3409,3519,2735,2727].indexOf(petId) != -1)
         {
            KTool.getMultiValue([4060],function(a:Array):void
            {
               if(Boolean(KTool.getBit(a[0],9)))
               {
                  clear();
                  _itemId = 999;
                  _tipMC = UIManager.getMovieClip("ui_SkillTipPanel");
                  ResourceManager.getResource(ClientConfig.getResPath(_path + _itemId + ".swf"),onLoadComHandler);
               }
            });
         }
         else
         {
            this.clear();
         }
      }
      
      public function destroy() : void
      {
         this.clear();
         this.main = null;
         this._tipMC = null;
      }
      
      private function onLoadComHandler(mc:DisplayObject) : void
      {
         if(this._tipMC == null)
         {
            return;
         }
         if(Boolean(mc) && Boolean(this.main))
         {
            mc.x = 583 + 37.5 / 2 + 5;
            mc.y = 45.6 - 36 / 2;
            this.main.addChild(mc);
            this._iconMc = mc as MovieClip;
            this._iconMc.addEventListener(MouseEvent.MOUSE_OVER,this.onOverHandler);
            this._iconMc.addEventListener(MouseEvent.MOUSE_OUT,this.onOutHandler);
            this._tipMC["info_txt"].htmlText = "将三藏、蒙奇多克、天河神将、沙悟净共同放入背包则战斗中永久看穿敌方精灵血量，且我方首发精灵登场时全属性+1 （仅限boss对战）";
         }
      }
      
      private function onOverHandler(e:MouseEvent) : void
      {
         var mX:Number = this._iconMc.mouseX;
         var mY:Number = this._iconMc.mouseY;
         var p:Point = this._iconMc.localToGlobal(new Point(mX,mY));
         LevelManager.appLevel.addChild(this._tipMC);
         this._tipMC.x = p.x + 15;
         this._tipMC.y = p.y + 15;
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
      }
      
      private function onMoveHandler(e:MouseEvent) : void
      {
         this._tipMC.x = LevelManager.stage.mouseX + 15;
         this._tipMC.y = LevelManager.stage.mouseY + 15;
      }
      
      private function onOutHandler(event:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._tipMC);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
      }
      
      public function clear() : void
      {
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
         if(Boolean(this.main) && Boolean(this._iconMc))
         {
            this.main.removeChild(this._iconMc);
         }
         if(Boolean(this._iconMc))
         {
            this._iconMc.removeEventListener(MouseEvent.MOUSE_OVER,this.onOverHandler);
            this._iconMc.removeEventListener(MouseEvent.MOUSE_OUT,this.onOutHandler);
            this._iconMc = null;
         }
         if(Boolean(this._tipMC))
         {
            DisplayUtil.removeForParent(this._tipMC);
         }
      }
   }
}
